<script lang="ts">
	import { Constants } from '$lib/model/Constants';
	import type { Pod } from '$lib/model/Pod';
	import { createEventDispatcher } from 'svelte';
	import { KeymanderDeck } from '../model/KeymanderDeck';
	import CardComponent from './CardComponent.svelte';
	import HouseIcon from './HouseIcon.svelte';
	import IconButton from './IconButton.svelte';
	import KeymanderComponent from './KeymanderComponent.svelte';

	export let deck: KeymanderDeck;
	export let editable: boolean = false;

	const dispatch = createEventDispatcher();

	function dispatchSelectedPodEvent(pod: Pod) {
		dispatch('podSelected', pod);
	}
</script>

<div class="grid-container">
	<KeymanderComponent keymander={deck.keymander} />
	{#each deck.pods.sort((a, b) => a.house.localeCompare(b.house)) as pod (pod.id)}
		<div>
			<HouseIcon house={pod.house} --width="2.5rem" --height="2.5rem" showName={true} />
			{#if editable}
				<IconButton on:click={() => dispatchSelectedPodEvent(pod)} title="Remove pod">🗑️</IconButton
				>
			{/if}
			<hr />
			{#each pod.cards as card}
				<CardComponent {card} />
			{/each}
		</div>
	{/each}
	{#each { length: Constants.MAX_POD_PER_DECK } as _, i}
		{#if i >= deck.pods.length}
			<div>Add pod...</div>
		{/if}
	{/each}
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		column-gap: 1em;
		align-items: center;
		min-height: 420px;
	}
</style>
