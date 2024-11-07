<script lang="ts">
	import { Keymander, KEYMANDER_LIST } from '$lib/model/Keymander';
	import { createEventDispatcher } from 'svelte';
	import MessageDialog from './MessageDialog.svelte';

	let selectedKeymander: Keymander | undefined;
	let show: boolean = false;
	let searchString: string = '';
	let filterVersion: string = 'ALL';
	$: searchString = searchString.toLowerCase();
	$: keymanderList = KEYMANDER_LIST.filter(
		(keymander) =>
			keymander.name.toLowerCase().includes(searchString) ||
			keymander.id.toLowerCase().includes(searchString)
	).filter((keymander) => filterVersion === 'ALL' || keymander.version === filterVersion);
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
			<div>
				<span>Version:</span>
				<label for="radio-all">
					<input type="radio" bind:group={filterVersion} value="ALL" id="radio-all" />
					ALL
				</label>
				<label for="radio-11">
					<input type="radio" bind:group={filterVersion} value="1.1" id="radio-11" />
					1.1
				</label>
				<label for="radio-20">
					<input type="radio" bind:group={filterVersion} value="2.0" id="radio-20" />
					2.0
				</label>
			</div>
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
			<div class="grid-images">
				<img
					src="keymanders/{selectedKeymander.frontImage}.png"
					alt={selectedKeymander.frontName}
					class="keymander-card"
				/>
				{#if selectedKeymander?.canFlip()}
					<img
						src="keymanders/{selectedKeymander.backImage}.png"
						alt={selectedKeymander.backName}
						class="keymander-card"
					/>
				{/if}
				{#if selectedKeymander?.token !== null && selectedKeymander?.token != undefined}
					<img
						src="keymanders/{selectedKeymander.tokenImage}.png"
						alt={selectedKeymander.token}
						class="keymander-card"
					/>
				{/if}
				{#each selectedKeymander?.extraCards as extraCard, i (extraCard)}
					<img
						src="keymanders/{selectedKeymander?.id}{String.fromCharCode(i + 99)}.png"
						alt={extraCard}
						class="keymander-card"
					/>
				{/each}
			</div>
		{/if}
	</div>
</MessageDialog>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: 1fr auto;
		height: 100vh;
		min-width: 90vw;
	}

	.grid-images {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 1em;
		row-gap: 1em;
	}

	li {
		list-style-type: none;
	}

	.keymander-button {
		background: none;
		border: none;
		white-space: nowrap;
	}

	.keymander-button:hover {
		outline: auto;
	}
	.keymander-card {
		max-width: 300px;
		max-height: 420px;
	}
</style>
