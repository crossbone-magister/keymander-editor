<script lang="ts">
	import { KeymanderDeck } from '$lib/model/KeymanderDeck';
	import { getContext } from 'svelte';
	import { type Writable } from 'svelte/store';
	import ExportButton from './ExportButton.svelte';
	import IconButton from './IconButton.svelte';
	import ImportButton from './ImportButton.svelte';
	import KeymanderDeckComponent from './KeymanderDeckComponent.svelte';
	import KeymanderSelectionModal from './KeymanderSelectionModal.svelte';
	import PersonalDeckList from './PersonalDeckList.svelte';

	const keymanderDeck: Writable<KeymanderDeck> = getContext('keymanderDeck');
	const errorMessage: Writable<Error | undefined> = getContext('errorMessage');

	function setKeymander(event: CustomEvent) {
		$keymanderDeck.keymander = event.detail;
		keymanderDeck.set($keymanderDeck);
	}

	function addPodToKeymanderDeck(event: CustomEvent) {
		try {
			keymanderDeck.set($keymanderDeck.addPod(event.detail));
		} catch (e) {
			console.error('Error happened while adding pod to Keymander deck', e);
			errorMessage.set(e);
		}
	}

	function removePodFromKeymanderDeck(event: CustomEvent) {
		keymanderDeck.set($keymanderDeck.removePod(event.detail));
	}

	function clearPods() {
		keymanderDeck.set($keymanderDeck.clearPods());
	}

	function resetKeymanderDeck() {
		keymanderDeck.set(KeymanderDeck.empty());
	}
</script>

<span
	class="h1-input-text"
	contenteditable="true"
	bind:textContent={$keymanderDeck.name}
	role="textbox"
/>
<div id="button-bar">
	<KeymanderSelectionModal on:keymanderSelected={setKeymander} />
	<IconButton on:click={clearPods} disabled={$keymanderDeck.pods.length <= 0} title="Clear pods"
		>🗑️</IconButton
	>
	<IconButton on:click={resetKeymanderDeck} title="Reset Keymander Deck">♻️</IconButton>
	<ExportButton deck={$keymanderDeck} />
	<ImportButton />
	<a href="full" class="print-button" title="View full screen">🖨️</a>
</div>

<KeymanderDeckComponent
	deck={$keymanderDeck}
	editable={true}
	on:podSelected={removePodFromKeymanderDeck}
/>
<PersonalDeckList on:podSelected={addPodToKeymanderDeck} />

<style>
	.print-button {
		text-decoration: none;
	}
	.h1-input-text {
		font-family: inherit;
		font-size: 2em;
		font-weight: bold;
		line-height: 1.2;
		letter-spacing: normal;
		border: none;
		background-color: transparent;
		padding: 0;
		margin: 0;
		display: inline-block;
		width: auto;
		white-space: nowrap;
		overflow: hidden;
	}
	.h1-input-text:hover {
		outline: auto;
	}
</style>
