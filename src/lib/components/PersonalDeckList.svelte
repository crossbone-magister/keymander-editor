<script lang="ts">
	/* eslint @typescript-eslint/no-unused-vars: "warn" */
	import DeckComponent from '$lib/components/DeckComponent.svelte';
	import { DeckLoaderHelper } from '$lib/helper/DeckLoaderHelper';
	import { Constants } from '$lib/model/Constants';
	import type { Deck } from '$lib/model/Deck';
	import type { Pod } from '$lib/model/Pod';
	import { type Toggle } from '$lib/stores';
	import {
		Button,
		ButtonGroup,
		ButtonToolbar,
		Col,
		Collapse,
		Container,
		Form,
		Icon,
		Input,
		InputGroup,
		InputGroupText,
		Modal,
		ModalBody,
		ModalFooter,
		ModalHeader,
		Pagination,
		PaginationItem,
		PaginationLink,
		Row,
		Table,
		Tooltip
	} from '@sveltestrap/sveltestrap';
	import { createEventDispatcher, getContext } from 'svelte';
	import { type Writable } from 'svelte/store';
	import HouseIcon from './HouseIcon.svelte';
	import ResetButton from './ResetButton.svelte';

	export let show = false;

	const { ALL_VALUE } = Constants;
	const dispatch = createEventDispatcher();
	const decks: Writable<Deck[]> = getContext('decks');
	const apiKey: Writable<string> = getContext('apiKey');
	const isLoading: Toggle = getContext('isLoading');
	const errorMessage: Writable<Error | undefined> = getContext('errorMessage');

	let showFilters = false;
	let nameFilter = '';
	let houseFilter = ALL_VALUE;
	let expansionFilter = ALL_VALUE;
	let selectedDeck: Deck | null = null;
	let showModal: boolean = false;
	let fullyLoaded: boolean = false;
	let currentPage = 0;
	let pageSize = 10;

	const deckLoader: DeckLoaderHelper = new DeckLoaderHelper(decks, $apiKey);
	deckLoader.onFullyLoaded((value) => {
		fullyLoaded = value;
	});

	$: deckHouses = Array.from(
		new Set($decks.flatMap((deck) => deck.pods).map((pod) => pod.house))
	).sort();
	$: deckExpansions = Array.from(
		new Map($decks.map((deck) => [deck.expansion, Constants.EXPANSIONS_LABELS[deck.expansion]]))
	).sort(([_, a], [__, b]) => a.localeCompare(b));
	$: decksToShow = $decks
		.filter((deck: Deck) => deck.name.toLowerCase().includes(nameFilter.toLowerCase()))
		.filter(
			(deck: Deck) =>
				houseFilter === ALL_VALUE || deck.pods.map((pod: Pod) => pod.house).includes(houseFilter)
		)
		.filter((deck: Deck) => expansionFilter === ALL_VALUE || deck.expansion === expansionFilter);
	$: filtersActive =
		nameFilter !== '' || houseFilter !== ALL_VALUE || expansionFilter !== ALL_VALUE;
	$: maxPages = Math.ceil(decksToShow.length / pageSize);

	function resetAllFilters() {
		nameFilter = '';
		houseFilter = ALL_VALUE;
		expansionFilter = ALL_VALUE;
	}

	function showDeck(deck: Deck) {
		selectedDeck = deck;
		showModal = true;
		show = false;
	}

	function dispatchSelectedPodEvent(event: CustomEvent) {
		dispatch('podSelected', event.detail);
	}

	async function loadNextPage() {
		try {
			show = false;
			isLoading.toggle();
			await deckLoader.loadNextPage();
		} catch (e) {
			console.error('Error occurred while importing Decks from DoK', e);
			errorMessage.set(e);
		} finally {
			show = true;
			isLoading.toggle();
		}
	}
</script>

<Modal size="lg" isOpen={show}>
	<ModalHeader>
		Your Decks ({decksToShow.length})
		<Row slot="close" class="align-items-center">
			<ButtonToolbar>
				<ButtonGroup>
					<Button
						class="search-button"
						outline
						size="sm"
						on:click={() => (showFilters = !showFilters)}
					>
						<Icon name={showFilters ? 'chevron-double-up' : 'search'} />
					</Button>
					<Tooltip target="search-button">Search for decks</Tooltip>
					{#if filtersActive}
						<Button id="clear-all-filters" outline size="sm" on:click={() => resetAllFilters()}
							><Icon name="backspace-fill" /></Button
						>
						<Tooltip target="clear-all-filters">Clear search</Tooltip>
					{/if}
				</ButtonGroup>
				<Button close on:click={() => (show = false)}></Button>
			</ButtonToolbar>
		</Row>
	</ModalHeader>
	<ModalBody>
		<Container>
			<Row>
				<Collapse isOpen={showFilters}>
					<Form class="m-1">
						<InputGroup class="mb-1" size="sm">
							<InputGroupText>Search by name</InputGroupText>
							<Input id="nameFilter" type="text" color="primary" bind:value={nameFilter} />
							<ResetButton bind:value={nameFilter} reset={''} />
						</InputGroup>
						<InputGroup class="mb-1" size="sm">
							<InputGroupText>Search by house</InputGroupText>
							<Input type="select" id="houseFilter" bind:value={houseFilter}>
								<option value={ALL_VALUE}></option>
								{#each deckHouses as house (house)}
									<option value={house}><HouseIcon {house} showName={true} /></option>
								{/each}
							</Input>
							<ResetButton bind:value={houseFilter} reset={ALL_VALUE} />
						</InputGroup>
						<InputGroup class="mb-1" size="sm">
							<InputGroupText>Search by expansion</InputGroupText>
							<Input id="expansionFilter" type="select" bind:value={expansionFilter}>
								<option value="all"></option>
								{#each deckExpansions as [value, label] (value)}
									<option {value}>{label}</option>
								{/each}
							</Input>
							<ResetButton bind:value={expansionFilter} reset={ALL_VALUE} />
						</InputGroup>
					</Form>
				</Collapse>
			</Row>
			<Row>
				<Table size="sm" striped borderless hover>
					<thead>
						<tr>
							<th>Name</th>
							<th>Expansion</th>
							<th>Houses</th>
						</tr>
					</thead>
					<tbody>
						{#each decksToShow.slice(currentPage * pageSize, (currentPage + 1) * pageSize) as deck (deck.id)}
							<tr role="button" on:click={() => showDeck(deck)}>
								<td>{deck.name}</td>
								<td>{Constants.EXPANSIONS_LABELS[deck.expansion]}</td>
								<td>
									{#each deck.pods as pod (pod.house)}
										<HouseIcon house={pod.house} />
									{/each}
								</td>
							</tr>
						{/each}
					</tbody>
				</Table>
			</Row>
		</Container>
	</ModalBody>
	<ModalFooter>
		<Container>
			<Row>
				<Col>
					<Pagination size="sm">
						<PaginationItem>
							<PaginationLink first on:click={() => (currentPage = 0)}></PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink previous on:click={() => (currentPage = Math.max(0, currentPage - 1))}
							></PaginationLink>
						</PaginationItem>
						{#key maxPages}
							{#each { length: maxPages } as _, i}
								<PaginationItem active={currentPage == i}>
									<PaginationLink on:click={() => (currentPage = i)}>{i + 1}</PaginationLink>
								</PaginationItem>
							{/each}
						{/key}
						<PaginationItem>
							<PaginationLink
								next
								on:click={() => (currentPage = Math.min(maxPages, currentPage + 1))}
							></PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink last on:click={() => (currentPage = maxPages - 1)}></PaginationLink>
						</PaginationItem>
					</Pagination>
				</Col>
				{#if !fullyLoaded}
					<Col xs="1">
						<Button
							id="load-more-deck-button"
							color={fullyLoaded ? 'secondary' : 'primary'}
							size="sm"
							on:click={() => loadNextPage()}
							disabled={fullyLoaded || filtersActive}
						>
							<Icon name="arrow-repeat" />
						</Button>
						<Tooltip target="load-more-deck-button">
							{fullyLoaded ? 'All decks loaded' : 'Load more decks'}
						</Tooltip>
					</Col>
				{/if}
			</Row>
		</Container>
	</ModalFooter>
</Modal>

<Modal
	size="lg"
	body
	header={selectedDeck?.name}
	isOpen={showModal}
	toggle={() => (showModal = !showModal)}
	on:closing={() => {
		show = true;
	}}
>
	{#if selectedDeck != null}
		<DeckComponent deck={selectedDeck} on:podSelected={dispatchSelectedPodEvent} />
	{/if}
</Modal>
