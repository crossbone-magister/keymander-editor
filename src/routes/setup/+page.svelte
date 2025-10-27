<script lang="ts">
	import { goto } from '$app/navigation';
	import IconAlert from '$lib/components/IconAlert.svelte';
	import type { Deck } from '$lib/model/Deck';
	import { DOK_SERVICE } from '$lib/service/DoKService';
	import type { Toggle } from '$lib/stores';
	import {
		Button,
		Card,
		CardBody,
		CardFooter,
		CardHeader,
		Col,
		Container,
		Form,
		Icon,
		Input,
		InputGroup,
		Row
	} from '@sveltestrap/sveltestrap';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const API_KEY_LENGTH = 36;

	const decks: Writable<Deck[]> = getContext('decks');
	const apiKeyStore: Writable<string> = getContext('apiKey');
	const errorMessage: Writable<Error | undefined> = getContext('errorMessage');
	const dataLoaded: Writable<boolean> = getContext('dataLoaded');
	const isLoading: Toggle = getContext('isLoading');

	var apiKey: string;

	async function loadDecks() {
		isLoading.toggle();
		try {
			const deckData = await DOK_SERVICE.retrieveDecks(apiKey);
			apiKeyStore.set(apiKey);
			decks.set(deckData);
			dataLoaded.set(true);
			goto('editor');
		} catch (e) {
			console.error('Error occurred while importing Decks from DoK', e);
			errorMessage.set(e);
		} finally {
			isLoading.toggle();
		}
	}
</script>

<Container>
	<Row>
		<Col xs="4" />
		<Col xs="4">
			{#if !$dataLoaded}
				<Card>
					<CardHeader><h6>Insert your API Key</h6></CardHeader>
					<CardBody>
						<Form on:submit={loadDecks}>
							<InputGroup>
								<Input
									type="text"
									bind:value={apiKey}
									minlength={API_KEY_LENGTH}
									maxlength={API_KEY_LENGTH}
									size={API_KEY_LENGTH}
									placeholder="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXXX"
									required
								/>
								<Button color="primary"><Icon name="arrow-right" /></Button>
							</InputGroup>
						</Form>
					</CardBody>
					<CardFooter>
						<IconAlert color="info"
							>Your DoK API Key is required to retrieve your decks from DoK.
						</IconAlert>
						<IconAlert color="light">
							Find more about generating Decks of Keyforge API Keys
							<a href="https://decksofkeyforge.com/about/sellers-and-devs">here</a>.
						</IconAlert>
					</CardFooter>
				</Card>
			{:else}
				<IconAlert color="info">
					You're all set, to start working goto the <a href="/">editor</a>.
				</IconAlert>
			{/if}
		</Col>
		<Col xs="4" />
	</Row>
</Container>
