<script lang="ts">
	import type { Deck } from '$lib/model/Deck';
	import type { Pod } from '$lib/model/Pod';
	import { createEventDispatcher } from 'svelte';
	import CardComponent from './CardComponent.svelte';
	import HouseIcon from './HouseIcon.svelte';
	import IconButton from './IconButton.svelte';

	export let deck: Deck;

	const dispatch = createEventDispatcher();

	function dispatchSelectedPodEvent(pod: Pod) {
		dispatch('podSelected', pod);
	}
</script>

<div>
	<h2>{deck.name}</h2>
	<div class="grid-container">
		{#each deck.pods as pod (pod.id)}
			<div>
				<HouseIcon house={pod.house} showName={true} --width="2.5rem" --height="2.5rem" />
				<IconButton
					on:click={() => {
						dispatchSelectedPodEvent(pod);
					}}
					title="Add pod to Keymander deck">➕</IconButton
				>
				<hr />
				{#each pod.cards as card}
					<CardComponent {card} />
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 1em;
	}
</style>
