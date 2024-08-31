<script lang="ts">
	import KeymanderDeckEditor from '$lib/components/KeymanderDeckEditor.svelte';
	import SetupPage from '$lib/components/SetupPage.svelte';
	import { getContext } from 'svelte';
	import { type Writable } from 'svelte/store';

	const dataLoaded: Writable<boolean> = getContext('dataLoaded');
</script>

{#if $dataLoaded}
	<KeymanderDeckEditor />
{:else}
	<SetupPage />
{/if}
