<script lang="ts">
	import type { JsonKeymanderDeck } from '$lib/model/import/JsonImport';
	import { KeymanderDeck } from '$lib/model/KeymanderDeck';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import MessageDialog from './MessageDialog.svelte';
	import IconButton from './IconButton.svelte';

	let jsonData: string;
	let showModal: boolean = false;

	const keymanderDeck: Writable<KeymanderDeck> = getContext('keymanderDeck');
	const errorMessage: Writable<Error | undefined> = getContext('errorMessage');

	function importDeck() {
		try {
			const loadedData: JsonKeymanderDeck = JSON.parse(jsonData);
			const loadedDeck = KeymanderDeck.fromJson(loadedData);
			keymanderDeck.set(loadedDeck);
			jsonData = '';
			showModal = false;
		} catch (e) {
			console.error('Error occurred while importing Keymander deck', e);
			errorMessage.set(e);
		}
	}
</script>

<IconButton
	on:click={() => {
		showModal = true;
	}}
	title="Import Keymander deck">⬆️</IconButton
>

<MessageDialog bind:visible={showModal}>
	<form on:submit|preventDefault={importDeck} class="grid-container">
		<label for="json-data">Paste your deck import data:</label>
		<textarea id="json-data" bind:value={jsonData} rows="25" cols="100" required></textarea>
		<input type="submit" value="Import" />
	</form>
</MessageDialog>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 0.1em;
	}
</style>
