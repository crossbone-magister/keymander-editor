<script lang="ts">
	import KeymanderDeckComponent from '$lib/components/KeymanderDeckComponent.svelte';
	import type { KeymanderDeck } from '$lib/model/KeymanderDeck';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const keymanderDeck: Writable<KeymanderDeck> = getContext('keymanderDeck');
</script>

<h1>{$keymanderDeck.name}</h1>
<KeymanderDeckComponent deck={$keymanderDeck} />
<a href="/" class="back-button" title="Back to editing">🔙</a>

<style>
	.back-button {
		text-decoration: none;
		font-size: xx-large;
	}
</style>
