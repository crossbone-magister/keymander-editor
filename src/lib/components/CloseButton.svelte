<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import IconButton from './IconButton.svelte';

	const dispatch = createEventDispatcher();

	function dispatchCloseEvent() {
		dispatch('close');
	}
</script>

<IconButton on:click={dispatchCloseEvent} title="Close">❌</IconButton>
