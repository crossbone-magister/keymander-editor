<script lang="ts">
	import type { JsonKeymanderDeck } from '$lib/model/import/JsonImport';
	import { KeymanderDeck } from '$lib/model/KeymanderDeck';
	import {
		Button,
		Form,
		FormGroup,
		Icon,
		Input,
		InputGroup,
		Modal,
		Tooltip
	} from '@sveltestrap/sveltestrap';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const keymanderDeck: Writable<KeymanderDeck> = getContext('keymanderDeck');
	const errorMessage: Writable<Error | undefined> = getContext('errorMessage');

	let files: FileList;
	let showModal: boolean = false;
	let uploader: Input;

	async function loadFileAndImport() {
		try {
			if (files.item(0) !== null) {
				const fileContents = await files.item(0)?.text();
				if (fileContents != undefined) {
					importDeck(JSON.parse(fileContents));
				}
			}
		} catch (e) {
			errorMessage.set(e);
		} finally {
			showModal = false;
		}
	}

	function importDeck(jsonData: JsonKeymanderDeck) {
		const loadedDeck = KeymanderDeck.fromJson(jsonData);
		keymanderDeck.set(loadedDeck);
	}
</script>

<Button
	id="upload-button"
	color="primary"
	on:click={() => {
		showModal = true;
	}}><Icon name="upload" /></Button
>
<Tooltip target="upload-button" placement="top">Import deck</Tooltip>

<Modal isOpen={showModal} header="Import deck" toggle={() => (showModal = !showModal)} body>
	<Form on:submit={loadFileAndImport}>
		<FormGroup>
			<InputGroup>
				<Input id="toLoad" type="file" required accept=".json" bind:files bind:this={uploader} />
				<Input id="submit-upload" type="submit" value="Load" color="primary" />
			</InputGroup>
		</FormGroup>
	</Form>
</Modal>
