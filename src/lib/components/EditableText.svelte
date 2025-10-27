<script lang="ts">
	export let contents: string;
</script>

<span class="h1-input-text" contenteditable="true" bind:textContent={contents} role="textbox" />

<style>
	.h1-input-text {
		font-family: inherit;
		font-size: 2em;
		font-weight: bold;
		line-height: 1.2;
		letter-spacing: normal;
		border: none;
		background-color: transparent;
		padding: 0;
		margin: 0;
		display: inline-block;
		width: auto;
		white-space: nowrap;
		overflow: hidden;
	}
	.h1-input-text:hover {
		outline: auto;
	}
</style>
