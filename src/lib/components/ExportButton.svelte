<script lang="ts">
	import type { KeymanderDeck } from '$lib/model/KeymanderDeck';
	import IconButton from './IconButton.svelte';

	export let deck: KeymanderDeck;
	let downloadLink: HTMLAnchorElement;
	let fileUrl: string;

	function exportDeck() {
		if (!deck.isComplete()) {
			throw new Error('Incomplete deck cannot be exported');
		}
		const fileName = `${deck.name}.json`;
		const deckExportFile = new File([JSON.stringify(deck)], fileName, {
			type: 'text/plain'
		});
		fileUrl = URL.createObjectURL(deckExportFile);
		downloadLink.href = fileUrl;
		downloadLink.download = fileName;
		downloadLink.click();
		downloadLink.href = '';
		downloadLink.download = '';
		window.URL.revokeObjectURL(fileUrl);
	}
</script>

<IconButton on:click={exportDeck} disabled={!deck.isComplete()} title="Export Keymander deck"
	>💾</IconButton
>
<a id="download-link" bind:this={downloadLink} hidden>Download</a>
