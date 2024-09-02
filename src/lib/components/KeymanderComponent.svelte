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
				src="keymanders/{keymander.frontImage}.png"
				alt={keymander.frontName}
				class="grid-item"
			/>
			<img
				src="keymanders/{keymander.backImage}.png"
				alt={keymander.backName}
				class="grid-item"
				class:grid-item-hidden={!backVisible}
			/>
			<img
				src="keymanders/{keymander.tokenImage}.png"
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
		max-width: 300px;
		max-height: 420px;
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
