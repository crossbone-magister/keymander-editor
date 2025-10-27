<script lang="ts">
	import type { KeymanderDeck } from '$lib/model/KeymanderDeck';
	import { Button, Icon, Tooltip } from '@sveltestrap/sveltestrap';

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

<Tooltip target="export-button" placement="right">Export deck</Tooltip>
<a id="download-link" bind:this={downloadLink} hidden>Download</a>
<Button id="export-button" on:click={exportDeck} disabled={!deck.isComplete()} color="primary">
	<Icon name="download" />
</Button>
