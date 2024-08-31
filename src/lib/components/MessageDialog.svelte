<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CloseButton from './CloseButton.svelte';

	export let visible: boolean = false;
	export let blocking: boolean = false;
	let dialogElement: HTMLDialogElement;

	$: visible ? show() : hide();

	const dispatch = createEventDispatcher();

	function dispatchCloseEvent() {
		dispatch('close');
	}

	function close() {
		visible = false;
	}

	function show() {
		if (dialogElement) {
			dialogElement.showModal();
		}
	}

	function hide() {
		if (dialogElement) {
			dialogElement.close();
			dispatchCloseEvent();
		}
	}
</script>

<dialog bind:this={dialogElement} class="message-dialog" on:close={close}>
	{#if !blocking}
		<p>
			<CloseButton on:close={close}></CloseButton>
		</p>
	{/if}
	<p>
		<slot></slot>
	</p>
</dialog>

<style>
	::backdrop {
		background-image: var(--modal-background-image, none);
		opacity: var(--modal-opacity, 1);
	}
</style>
