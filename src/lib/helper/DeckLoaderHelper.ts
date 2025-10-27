import type { Deck } from '$lib/model/Deck';
import { DOK_SERVICE } from '$lib/service/DoKService';
import { sessionBackedStore } from '$lib/stores';
import type { Writable } from 'svelte/store';

export class DeckLoaderHelper {
	private deckStore: Writable<Deck[]>;
	private apiKey: string;
	private pageStore: Writable<number>;
	private fullyLoadedStore: Writable<boolean>;
	private nextPage: number = 1;
	private fullyLoaded: boolean = false;

	constructor(deckStore: Writable<Deck[]>, apiKey: string) {
		this.deckStore = deckStore;
		this.apiKey = apiKey;
		this.pageStore = sessionBackedStore(
			'personalDeck:page',
			1,
			(value) => Number(value),
			(value) => String(value)
		);
		this.fullyLoadedStore = sessionBackedStore(
			'personalDeck:fullyLoaded',
			false,
			(value) => value?.toLocaleLowerCase() === 'true',
			(value) => String(value)
		);
		this.pageStore.subscribe((value) => {
			this.nextPage = value;
		});
		this.fullyLoadedStore.subscribe((value) => {
			this.fullyLoaded = value;
		});
	}

	hasNextPage(): boolean {
		return !this.fullyLoaded;
	}

	onFullyLoaded(callback: (value: boolean) => void): void {
		this.fullyLoadedStore.subscribe(callback);
	}

	async loadNextPage() {
		const newDecks = await DOK_SERVICE.retrieveDecks(this.apiKey, this.nextPage);
		if (newDecks.length > 0) {
			this.deckStore.update((currentDecks) => [...currentDecks, ...newDecks]);
			this.pageStore.set(this.nextPage + 1);
		} else {
			this.fullyLoadedStore.set(true);
		}
	}
}
