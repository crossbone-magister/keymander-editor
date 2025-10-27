<script lang="ts">
	import { version } from '$app/environment';
	import { goto } from '$app/navigation';
	import ErrorDialog from '$lib/components/ErrorDialog.svelte';
	import LoadingDialog from '$lib/components/LoadingDialog.svelte';
	import { apiKey, dataLoaded, decks, errorMessage, isLoading, keymanderDeck } from '$lib/stores';
	import {
		Container,
		Icon,
		Nav,
		Navbar,
		NavbarBrand,
		NavLink,
		Row,
		Tooltip
	} from '@sveltestrap/sveltestrap';
	import { onMount, setContext } from 'svelte';

	setContext('decks', decks);
	setContext('keymanderDeck', keymanderDeck);
	setContext('errorMessage', errorMessage);
	setContext('dataLoaded', dataLoaded);
	setContext('apiKey', apiKey);
	setContext('isLoading', isLoading);

	onMount(() => {
		if (!$dataLoaded) {
			goto('setup');
		}
	});
</script>

<svelte:head>
	<title>Keymander Deck Editor</title>
</svelte:head>
<Navbar color="primary-subtle" class="mb-2 sticky-top">
	<NavbarBrand>
		<Container>
			<Row>Keymander Deck Editor</Row>
			<Row class="fs-6">v{version}</Row>
		</Container>
	</NavbarBrand>
	<Nav class="align-items-center">
		{#if $dataLoaded}
			<NavLink href="editor">Editor</NavLink>
			<NavLink href="viewer">Viewer</NavLink>
		{/if}
		<NavLink
			id="github-link"
			href="https://github.com/crossbone-magister/keymander-editor"
			target="_blank"
		>
			<Icon name="github" class="fs-3" />
			<Tooltip target="github-link">View on GitHub</Tooltip>
		</NavLink>
	</Nav>
</Navbar>
<slot></slot>
<ErrorDialog />
<LoadingDialog />
