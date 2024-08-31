<script lang="ts">
	export let title: string = '';
	export let disabled: boolean = false;
</script>

<button on:click {title} {disabled}>
	<slot />
</button>

<style>
	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}

	button:disabled {
		color: rgba(0, 0, 0, 0.5);
	}
</style>
