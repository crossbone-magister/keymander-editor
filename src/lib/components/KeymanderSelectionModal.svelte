<script lang="ts">
	import { Constants } from '$lib/model/Constants';
	import { Keymander, KEYMANDER_LIST } from '$lib/model/Keymander';
	import {
		Button,
		ButtonGroup,
		ButtonToolbar,
		Col,
		Collapse,
		Container,
		Icon,
		Image,
		Input,
		InputGroup,
		InputGroupText,
		ListGroup,
		ListGroupItem,
		Modal,
		ModalBody,
		ModalHeader,
		Row,
		Tooltip
	} from '@sveltestrap/sveltestrap';
	import { createEventDispatcher } from 'svelte';
	import ResetButton from './ResetButton.svelte';

	const { ALL_VALUE } = Constants;

	let selectedKeymander: Keymander | undefined;
	let show: boolean = false;
	let showFilters: boolean = false;
	let searchString: string = '';
	let filterVersion: string = ALL_VALUE;
	$: searchString = searchString.toLowerCase();
	$: keymanderList = KEYMANDER_LIST.filter(
		(keymander) =>
			keymander.name.toLowerCase().includes(searchString) ||
			keymander.id.toLowerCase().includes(searchString)
	).filter((keymander) => filterVersion === ALL_VALUE || keymander.version === filterVersion);
	$: filtersActive = filterVersion !== ALL_VALUE || searchString !== '';
	const dispatch = createEventDispatcher();

	function resetAllFilters() {
		filterVersion = ALL_VALUE;
		searchString = '';
	}

	function dispatchKeymanderSelected(keymander: Keymander) {
		dispatch('keymanderSelected', keymander);
		show = false;
		searchString = '';
		filterVersion = ALL_VALUE;
	}
</script>

<Button id="select-keymander-button" color="primary" on:click={() => (show = true)}>Keymanders</Button>
<Tooltip target="select-keymander-button" trigger="hover" placement="right">Select Keymander</Tooltip>
<Modal
	size="xl"
	isOpen={show}
	on:close={() => {
		searchString = '';
	}}
>
	<ModalHeader
		toggle={() => {
			show = !show;
		}}
	>
		Keymanders
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
					<InputGroup class="p-1" size="sm">
						<InputGroupText>Search by name/id</InputGroupText>
						<Input
							id="keymander-name-id-search"
							bsSize="sm"
							type="text"
							bind:value={searchString}
						/>
						<ResetButton bind:value={searchString} reset={''} />
						<InputGroupText>Search by version</InputGroupText>
						<Input type="select" bind:value={filterVersion}>
							<option value="all"></option>
							{#each ['1.1', '2.0'] as version}
								<option value={version}>{version}</option>
							{/each}
						</Input>
						<ResetButton bind:value={filterVersion} reset={ALL_VALUE} />
					</InputGroup>
				</Collapse>
			</Row>
			<Row class="p-1">
				<Col xs="auto" md=6 class="overflow-auto vh-100">
					<ListGroup flush>
						{#each keymanderList as keymander, i (keymander.id)}
							<ListGroupItem
								id="keymander-{i}"
								color="primary"
								tag="button"
								action
								on:click={() => dispatchKeymanderSelected(selectedKeymander)}
							>
								<div
									role="alert"
									on:mouseenter={() => {
										selectedKeymander = keymander;
									}}
									on:mouseleave={() => {
										selectedKeymander = undefined;
									}}
								>
									{keymander.id} - {keymander.name}
								</div>
							</ListGroupItem>
						{/each}
					</ListGroup>
				</Col>
				<Col md=6>
					{#if selectedKeymander !== undefined}
						<Container>
							<Row class="mb-1">
								<Col xs={selectedKeymander.canFlip() && selectedKeymander.hasToken() ? 3 : 6}>
									<Image
										fluid
										src="keymanders/{selectedKeymander.frontImage}.png"
										alt={selectedKeymander.frontName}
									/>
								</Col>
								{#if selectedKeymander.canFlip()}
									<Col xs={selectedKeymander.hasToken() ? 3 : 6}>
										<Image
											fluid
											src="keymanders/{selectedKeymander.backImage}.png"
											alt={selectedKeymander.backName || 'keymanderBackImage'}
										/>
									</Col>
								{/if}
								{#if selectedKeymander.hasToken()}
									<Col xs={selectedKeymander.canFlip() ? 3 : 6}>
										<Image
											fluid
											src="keymanders/{selectedKeymander.tokenImage}.png"
											alt={selectedKeymander.token || 'keymanderTokenImage'}
										/>
									</Col>
								{/if}
							</Row>
							<Row>
								{#each selectedKeymander.extraCards as extraCard, i (extraCard)}
									<Col>
										<Image
											fluid
											src="keymanders/{selectedKeymander.id}{String.fromCharCode(i + 99)}.png"
											alt={extraCard}
										/>
									</Col>
								{/each}
							</Row>
						</Container>
					{/if}
				</Col>
			</Row>
		</Container>
	</ModalBody>
</Modal>
