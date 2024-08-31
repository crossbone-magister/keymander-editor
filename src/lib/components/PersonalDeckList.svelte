<script lang="ts">
	import DeckComponent from '$lib/components/DeckComponent.svelte';
	import type { Deck } from '$lib/model/Deck';
	import type { Pod } from '$lib/model/Pod';
	import { createEventDispatcher, getContext } from 'svelte';
	import { type Writable } from 'svelte/store';
	import HouseIcon from './HouseIcon.svelte';
	import MessageDialog from './MessageDialog.svelte';

	const decks: Writable<Deck[]> = getContext('decks');
	const dispatch = createEventDispatcher();

	let nameFilter = '';
	let houseFilter = 'all';
	let selectedDeck: Deck | null = null;
	let showModal: boolean = false;

	$: deckHouses = new Set($decks.flatMap((deck) => deck.pods).map((pod) => pod.house));
	$: decksToShow = $decks.filter(
		(deck: Deck) =>
			deck.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
			(houseFilter === 'all' || deck.pods.map((pod: Pod) => pod.house).includes(houseFilter))
	);

	function showDeck(deck: Deck) {
		selectedDeck = deck;
		showModal = true;
	}

	function dispatchSelectedPodEvent(event: CustomEvent) {
		dispatch('podSelected', event.detail);
	}
</script>

<h1>Your Decks</h1>
<p>
	<label for="name-filter">Filter by name:</label>
	<input type="text" id="name-filter" bind:value={nameFilter} />
</p>
<p>
	<span>Filter by House:</span>
	<label class="clickable">
		<input type="radio" name="house" value="all" bind:group={houseFilter} /> All
	</label>
	{#each deckHouses as house (house)}
		<label class:selected={houseFilter === house} class="clickable">
			<input type="radio" name="house" value={house} bind:group={houseFilter} hidden />
			<HouseIcon {house} showName={true} />
		</label>
	{/each}
</p>
<div class="deck-list-grid">
	{#each decksToShow as deck (deck.id)}
		<button class="deck-grid-button" on:click={() => showDeck(deck)}>
			{deck.name}
			{#each deck.pods as pod (pod.house)}
				<HouseIcon house={pod.house} />
			{/each}
		</button>
	{/each}
</div>
<MessageDialog bind:visible={showModal}>
	{#if selectedDeck != null}
		<DeckComponent deck={selectedDeck} on:podSelected={dispatchSelectedPodEvent} />
	{/if}
</MessageDialog>

<style>
	.selected {
		font-weight: bold;
	}
	.clickable:hover {
		cursor: pointer;
	}
	.deck-list-grid {
		display: grid;
		grid-template-columns: 0.25fr;
	}

	.deck-grid-button {
		display: grid;
		grid-template-columns: 1fr repeat(3, 0.1fr);
		align-items: center;
		justify-items: left;
		margin-bottom: 0.5em;
		padding: 0.1em;
		cursor: pointer;
		background: none;
		outline: none;
		border: none;
	}

	.deck-grid-button:hover {
		outline: auto;
	}
</style>
