<script lang="ts">
	import type { Keymander } from '$lib/model/Keymander';

	export let keymander: Keymander | null;

	let backVisible: boolean = false;
	let tokenVisible: boolean = false;

	function showBack() {
		backVisible = true;
	}
	function showToken() {
		tokenVisible = true;
	}
	function hide() {
		backVisible = tokenVisible = false;
	}
</script>

<div>
	{#if keymander !== null}
		<div class="grid-container">
			<img
				src="https://placehold.co/300x420?text={keymander.frontName}"
				alt={keymander.frontName}
				class="grid-item"
			/>
			<img
				src="https://placehold.co/300x420/gray/black?text={keymander.backName}"
				alt={keymander.backName}
				class="grid-item"
				class:grid-item-hidden={!backVisible}
			/>
			<img
				src="https://placehold.co/300x420/black/white?text={keymander.token}"
				alt={keymander.token}
				class="grid-item"
				class:grid-item-hidden={!tokenVisible}
			/>
			<div class="grid-item hover-grid-container">
				{#if keymander?.canFlip()}
					<div on:mouseenter={showBack} on:mouseleave={hide} role="none" title="Show Back">🔄</div>
				{/if}
				{#if keymander?.token !== null && keymander?.token != undefined}
					<div on:mouseenter={showToken} on:mouseleave={hide} role="none" title="Show Token">
						♟️
					</div>
				{/if}
			</div>
		</div>
	{:else}
		<p>Keymander not selected...</p>
	{/if}
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: 1fr;
		position: relative;
		align-content: end;
	}
	.grid-item {
		grid-column: 1;
		grid-row: 1;
	}
	.grid-item-hidden {
		visibility: hidden;
	}
	.hover-grid-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		padding-top: 130%;
		justify-items: center;
	}
</style>
