<script lang="ts">
	import { Keymander, KEYMANDER_LIST } from '$lib/model/Keymander';
	import { createEventDispatcher } from 'svelte';
	import MessageDialog from './MessageDialog.svelte';

	let selectedKeymander: Keymander | undefined;
	let show: boolean = false;
	let searchString: string = '';
	$: searchString = searchString.toLowerCase();
	$: keymanderList = KEYMANDER_LIST.filter(
		(keymander) =>
			keymander.name.toLowerCase().includes(searchString) ||
			keymander.id.toLowerCase().includes(searchString)
	);
	const dispatch = createEventDispatcher();

	function showDetails(keymander: Keymander) {
		selectedKeymander = keymander;
	}

	function hideDetails() {
		selectedKeymander = undefined;
	}

	function dispatchKeymanderSelected(keymander: Keymander) {
		dispatch('keymanderSelected', keymander);
		show = false;
		searchString = '';
	}
</script>

<button on:click={() => (show = true)} title="Select Keymander">Select Keymander</button>
<MessageDialog
	bind:visible={show}
	on:close={() => {
		searchString = '';
	}}
>
	<div class="grid-container">
		<div>
			<label for="search-keymander">Search:</label>
			<input type="text" id="search-keymander" bind:value={searchString} />
			<ul>
				{#each keymanderList as keymander (keymander.id)}
					<li>
						<button
							class="keymander-button"
							on:mouseenter={() => {
								showDetails(keymander);
							}}
							on:mouseleave={hideDetails}
							on:click={() => {
								dispatchKeymanderSelected(keymander);
							}}>{keymander.id} - {keymander.name}</button
						>
					</li>
				{/each}
			</ul>
		</div>
		{#if selectedKeymander !== undefined}
			<img
				src="https://placehold.co/300x420?text={selectedKeymander.frontName}"
				alt={selectedKeymander.frontName}
			/>
			{#if selectedKeymander?.canFlip()}
				<img
					src="https://placehold.co/300x420/gray/black?text={selectedKeymander.backName}"
					alt={selectedKeymander.backName}
				/>
			{/if}
			{#if selectedKeymander?.token !== null && selectedKeymander?.token != undefined}
				<img
					src="https://placehold.co/300x420/black/white?text={selectedKeymander.token}"
					alt={selectedKeymander.token}
				/>
			{/if}
		{/if}
	</div>
</MessageDialog>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 1em;
		height: 100vh;
		min-width: 90vw;
	}

	li {
		list-style-type: none;
	}

	.keymander-button {
		background: none;
		border: none;
	}

	.keymander-button:hover {
		outline: auto;
	}
</style>
