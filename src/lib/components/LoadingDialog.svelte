<script lang="ts">
	import type { Toggle } from '$lib/stores';
	import { Col, Container, Modal, Row, Spinner } from '@sveltestrap/sveltestrap';
	import { getContext } from 'svelte';
	const isLoading: Toggle = getContext('isLoading');
</script>

<Modal centered autoFocus backdrop body keyboard={false} isOpen={$isLoading}>
	<Container>
		<Row>
			<Col xs="1"><Spinner type="border" color="primary" /></Col>
			<Col>Loading your decks...</Col>
		</Row>
	</Container>
</Modal>
