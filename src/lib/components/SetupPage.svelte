<script lang="ts">
	import type { Deck } from '$lib/model/Deck';
	import { DOK_SERVICE } from '$lib/service/DoKService';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import IconButton from './IconButton.svelte';
	import MessageDialog from './MessageDialog.svelte';

	const decks: Writable<Deck[]> = getContext('decks');
	const errorMessage: Writable<Error | undefined> = getContext('errorMessage');
	const dataLoaded: Writable<boolean> = getContext('dataLoaded');

	var showModal: boolean = false;
	var apiKey: string;

	async function loadDecks() {
		showModal = true;
		try {
			const deckData = await DOK_SERVICE.retrieveDecks(apiKey);
			decks.set(deckData);
			dataLoaded.set(true);
		} catch (e) {
			console.error('Error occurred while importing Decks from DoK', e);
			errorMessage.set(e);
		}
		showModal = false;
	}
</script>

<div class="main-container">
	<div class="login-container">
		<span class="title">Keymander Deck Editor</span>
		<form on:submit|preventDefault={loadDecks} class="login-form">
			<label for="api-key">Enter your Decks of Keyforge API Key:</label>
			<input
				type="password"
				name="api-key"
				id="api-key"
				bind:value={apiKey}
				required
				placeholder="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXXX"
			/>
			<IconButton title="Start building now">Start building now ➡️</IconButton>
		</form>

		<div class="info">
			<span class="icon">ℹ️</span>
			<span>
				Your DoK API Key is required to retrieve your decks from DoK. <br /><br />
				Don't know what a DoK API Key is and how to generate it? Find more
				<a href="https://decksofkeyforge.com/about/sellers-and-devs">here</a>.
			</span>
		</div>
	</div>
</div>

<MessageDialog visible={showModal} blocking={true}>
	<div class="dialog-container">
		<label for="loading-progress">Loading your decks...</label>
		<progress id="loading-progress"></progress>
	</div>
</MessageDialog>

<style>
	.title {
		font-size: xx-large;
	}
	.dialog-container {
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		align-items: center;
	}
	.login-form {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
	}
	.main-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	
	.login-container {
		grid-column: 2;
		display: grid;
		grid-template-rows: 1em, repeat(2, 1fr);
		row-gap: 1em;
		padding: 1em;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.info {
		background-color: aliceblue;
		border-top: solid darkblue;
		padding: 1em;
		display: grid;
		grid-template-columns: 1em 1fr;
	}

	.icon {
		font-size: larger;
		color: darkblue;
	}
</style>
