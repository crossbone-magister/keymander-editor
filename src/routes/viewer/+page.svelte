<script lang="ts">
	import KeymanderDeckComponent from '$lib/components/KeymanderDeckComponent.svelte';
	import type { KeymanderDeck } from '$lib/model/KeymanderDeck';
	import { Button, Col, Container, Icon, Row } from '@sveltestrap/sveltestrap';
	import html2canvas from 'html2canvas';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const keymanderDeck: Writable<KeymanderDeck> = getContext('keymanderDeck');
	const errorMessage: Writable<Error | undefined> = getContext('errorMessage');

	let downloadLink: HTMLAnchorElement;

	function takeScreenshot() {
		const toExport = document.getElementById('full-view');
		if (toExport !== null) {
			html2canvas(toExport, {})
				.then((canvas) => {
					downloadLink.href = canvas.toDataURL('image/png');
					downloadLink.download = `${$keymanderDeck.name}-screenshot.png`;
					downloadLink.click();
					downloadLink.href = '';
					downloadLink.download = '';
				})
				.catch((e) => {
					console.error('Error occurred', e);
					errorMessage.set(new Error('Error occurred generating screenshot'));
				});
		}
	}
</script>

<a id="download-link" bind:this={downloadLink} hidden>Download</a>
<Container id="full-view">
	<Row>
		<Col>
			<h1>{$keymanderDeck.name}</h1>
		</Col>
	</Row>
	<Row>
		<KeymanderDeckComponent deck={$keymanderDeck} />
	</Row>
</Container>
<Container class="sticky-bottom p-1">
	<Row class="justify-content-end">
		<Button id="export-screenshot" color="primary" size="xxl" on:click={() => takeScreenshot()}>
			<Icon name="image-fill" /> Take a screenshot
		</Button>
	</Row>
</Container>
