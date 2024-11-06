<script lang="ts">
	import ErrorDialog from '$lib/components/ErrorDialog.svelte';
	import { dataLoaded, decks, errorMessage, keymanderDeck } from '$lib/stores';
	import { setContext } from 'svelte';
	import { version } from '$app/environment';

	setContext('decks', decks);
	setContext('keymanderDeck', keymanderDeck);
	setContext('errorMessage', errorMessage);
	setContext('dataLoaded', dataLoaded);
</script>

<svelte:head>
	<title>Keymander Editor</title>
</svelte:head>

<slot></slot>
<footer class="footer">
	Created by <a href="https://github.com/crossbone-magister">Crossbone Magister</a> -
	View on <a href="https://github.com/crossbone-magister/keymander-editor">GitHub</a> -
	Version {version}
</footer>

<ErrorDialog />

<style>
	footer {
		font-size: smaller;
		text-align: right;
	}
</style>
