<script lang="ts">
	import { KeymanderDeck } from '$lib/model/KeymanderDeck';
	import {
		Button,
		ButtonGroup,
		ButtonToolbar,
		Col,
		Container,
		Icon,
		Row,
		Toast,
		ToastHeader,
		Tooltip
	} from '@sveltestrap/sveltestrap';
	import { getContext } from 'svelte';
	import { type Writable } from 'svelte/store';
	import EditableText from './EditableText.svelte';
	import ExportButton from './ExportButton.svelte';
	import ImportButton from './ImportButton.svelte';
	import KeymanderDeckComponent from './KeymanderDeckComponent.svelte';
	import KeymanderSelectionModal from './KeymanderSelectionModal.svelte';
	import PersonalDeckList from './PersonalDeckList.svelte';

	const keymanderDeck: Writable<KeymanderDeck> = getContext('keymanderDeck');
	const errorMessage: Writable<Error | undefined> = getContext('errorMessage');

	let showToast = false;
	let showDecks = false;

	function setKeymander(event: CustomEvent) {
		$keymanderDeck.keymander = event.detail;
		keymanderDeck.set($keymanderDeck);
	}

	function addPodToKeymanderDeck(event: CustomEvent) {
		try {
			keymanderDeck.set($keymanderDeck.addPod(event.detail));
			showToast = true;
		} catch (e) {
			console.error('Error happened while adding pod to Keymander deck', e);
			errorMessage.set(e);
		}
	}

	function removePodFromKeymanderDeck(event: CustomEvent) {
		keymanderDeck.set($keymanderDeck.removePod(event.detail));
	}

	function clearPods() {
		keymanderDeck.set($keymanderDeck.clearPods());
	}

	function resetKeymanderDeck() {
		keymanderDeck.set(KeymanderDeck.empty());
	}

	function toggleToast() {
		showToast = !showToast;
	}
</script>

<Container>
	<Row class="mb-2 justify-content-center align-items-center">
		<Col xs="12" md="auto" class="me-2">
			<EditableText bind:contents={$keymanderDeck.name}></EditableText>
		</Col>
		<Col class="justify-content-end">
			<ButtonToolbar>
				<ButtonGroup size="xxl" class="me-2">
					<KeymanderSelectionModal on:keymanderSelected={setKeymander} />
					<Button
						color="primary"
						id="select-pod-button"
						on:click={() => {
							showDecks = true;
						}}>Pods</Button
					>
					<Tooltip target="select-pod-button" trigger="hover" placement="top">Select pod</Tooltip>
				</ButtonGroup>
				<ButtonGroup size="sm" class="me-2">
					<Button
						id="clear-pods"
						color="danger"
						on:click={clearPods}
						disabled={$keymanderDeck.pods.length <= 0}
					>
						<Icon name="trash-fill" />
					</Button>
					<Button
						id="reset-deck"
						color="danger"
						on:click={resetKeymanderDeck}
						title="Reset Keymander Deck"
					>
						<Icon name="arrow-counterclockwise" />
					</Button>
				</ButtonGroup>
				<ButtonGroup size="sm" class="me-2">
					<ImportButton />
					<ExportButton deck={$keymanderDeck} />
				</ButtonGroup>
			</ButtonToolbar>
			<Tooltip target="clear-pods" placement="top">Clear pods</Tooltip>
			<Tooltip target="reset-deck" placement="top">Reset deck</Tooltip>
		</Col>
	</Row>
	<Row>
		<KeymanderDeckComponent
			deck={$keymanderDeck}
			editable={true}
			on:podSelected={removePodFromKeymanderDeck}
		/>
	</Row>
</Container>

<PersonalDeckList on:podSelected={addPodToKeymanderDeck} bind:show={showDecks} />

<div class="sticky-bottom z-9999">
	<Toast autohide delay={1500} theme="dark" isOpen={showToast} on:close={() => (showToast = false)}>
		<ToastHeader icon="success" toggle={toggleToast}>Pod added</ToastHeader>
	</Toast>
</div>

<style>
	.z-9999 {
		z-index: 9999;
	}
</style>
