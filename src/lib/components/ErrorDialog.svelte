<script lang="ts">
	import { Modal, ModalBody } from '@sveltestrap/sveltestrap';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import IconAlert from './IconAlert.svelte';

	$: showModal = $errorMessage !== undefined;
	const errorMessage: Writable<Error | undefined> = getContext('errorMessage');

	function closeModal() {
		errorMessage.set(undefined);
	}
</script>

<Modal autoFocus centered backdrop header="Error occurred" isOpen={showModal} toggle={closeModal}>
	<ModalBody>
		<IconAlert color="danger" iconName="exclamation-octagon-fill">
			{$errorMessage
				? $errorMessage.message
				: 'You should see a message here. This means something went wrong.'}
		</IconAlert>
	</ModalBody>
</Modal>
