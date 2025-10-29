<script lang="ts">
	import type { Toggle } from '$lib/stores';
	import { Col, Modal, Row, Spinner } from '@sveltestrap/sveltestrap';
	import { getContext } from 'svelte';
	const isLoading: Toggle = getContext('isLoading');
</script>

<Modal centered autoFocus backdrop body keyboard={false} isOpen={$isLoading}>
	<Row class="align-items-center">
		<Col xs=2 md=1><Spinner type="border" color="primary" /></Col>
		<Col><div>Loading your decks...</div></Col>
	</Row>
</Modal>
