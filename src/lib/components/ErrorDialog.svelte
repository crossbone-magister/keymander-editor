<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import MessageDialog from './MessageDialog.svelte';

	$: showModal = $errorMessage !== undefined;
	const errorMessage: Writable<Error | undefined> = getContext('errorMessage');

	function closeModal() {
		errorMessage.set(undefined);
	}
</script>

<MessageDialog
	visible={showModal}
	on:close={closeModal}
	--modal-background-image="linear-gradient(45deg, red, crimson)"
	--modal-opacity="0.75"
>
	<p>
		<b>ERROR OCCURRED</b>
	</p>
	<p>
		{$errorMessage
			? $errorMessage.message
			: 'You should see a message here. This means something went wrong.'}
	</p>
</MessageDialog>
