<script lang="ts">
	import ErrorDialog from '$lib/components/ErrorDialog.svelte';
	import { dataLoaded, decks, errorMessage, keymanderDeck } from '$lib/stores';
	import { setContext } from 'svelte';

	setContext('decks', decks);
	setContext('keymanderDeck', keymanderDeck);
	setContext('errorMessage', errorMessage);
	setContext('dataLoaded', dataLoaded);
</script>

<svelte:head>
	<title>Keymander Editor</title>
</svelte:head>

<slot></slot>

<ErrorDialog />
