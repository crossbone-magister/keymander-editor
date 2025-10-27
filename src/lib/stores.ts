import { writable, type Writable } from 'svelte/store';
import type { Deck } from './model/Deck';
import { KeymanderDeck } from './model/KeymanderDeck';

const storagePrefix = 'keymandereditor:';

export interface Toggle extends Writable<boolean> {
	toggle(): void;
}

export function sessionBackedStore<T>(
	key: string,
	initialValue: T,
	reader: (value: string | null) => T,
	writer: (value: T) => string
): Writable<T> {
	let storage: Writable<T>;
	key = `${storagePrefix}${key}`;
	if (typeof window !== 'undefined') {
		storage = writable(
			sessionStorage.getItem(key) ? reader(sessionStorage.getItem(key)) : initialValue
		);
		storage.subscribe((value: T) => {
			if (!sessionStorage) return;
			sessionStorage.setItem(key, writer(value));
		});
	} else {
		storage = writable(initialValue);
	}
	return storage;
}

function jsonObjectBackedStore<T>(key: string, initialValue: T) {
	return sessionBackedStore(
		key,
		initialValue,
		(value) => {
			if (value != null) {
				return JSON.parse(value);
			} else {
				console.error(`Storage value for ${key} is null.`);
				throw Error(`Storage value for ${decks} is null.`);
			}
		},
		(value) => JSON.stringify(value)
	);
}

export function toggle(): Toggle {
	const store = writable(false);
	return {
		...store,
		toggle: () => store.update((value) => !value)
	};
}

export const errorMessage: Writable<Error | undefined> = writable(undefined);
export const isLoading: Toggle = toggle();

export const decks: Writable<Deck[]> = jsonObjectBackedStore('decks', [] as Deck[]);

export const keymanderDeck: Writable<KeymanderDeck> = sessionBackedStore(
	'keymanderDeck',
	KeymanderDeck.empty(),
	(value) => {
		if (value != null) {
			return KeymanderDeck.fromJson(JSON.parse(value));
		} else {
			console.error('Storage value for keymanderDeck is null.');
			throw Error('Storage value for keymanderDeck is null.');
		}
	},
	(value) => JSON.stringify(value)
);

export const dataLoaded: Writable<boolean> = sessionBackedStore(
	'dataLoaded',
	false,
	(value) => value?.toLocaleLowerCase() === 'true',
	(value) => String(value)
);

export const apiKey: Writable<string> = sessionBackedStore(
	'apiKey',
	'',
	(value) => value ?? '',
	(value) => String(value)
);
