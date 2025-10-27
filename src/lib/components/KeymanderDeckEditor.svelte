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
	<Row class="mb-2 justify-content-center">
		<Col class="me-2">
			<EditableText bind:contents={$keymanderDeck.name}></EditableText>
		</Col>
		<Col class="justify-content-end">
			<ButtonToolbar>
				<ButtonGroup size="xxl" class="me-2">
					<KeymanderSelectionModal on:keymanderSelected={setKeymander} />
					<Button
						color="primary"
						on:click={() => {
							showDecks = true;
						}}>Select pod...</Button
					>
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
			<Tooltip target="clear-pods" placement="right">Clear pods</Tooltip>
			<Tooltip target="reset-deck" placement="right">Reset deck</Tooltip>
		</Col>
	</Row>
	<Row>
		<Col>
			<KeymanderDeckComponent
				deck={$keymanderDeck}
				editable={true}
				on:podSelected={removePodFromKeymanderDeck}
			/>
		</Col>
	</Row>
	<Row>
		<Col>
			<PersonalDeckList on:podSelected={addPodToKeymanderDeck} bind:show={showDecks} />
		</Col>
	</Row>
</Container>

<Container class="sticky-bottom" style="z-index: 9999;">
	<Row class="justify-content-center">
		<Toast autohide delay={3000} isOpen={showToast} on:close={() => (showToast = false)}>
			<ToastHeader icon="success" toggle={toggleToast}>Pod added</ToastHeader>
		</Toast>
	</Row>
</Container>
