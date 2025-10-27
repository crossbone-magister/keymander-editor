<script lang="ts">
	import { Button, Icon } from '@sveltestrap/sveltestrap';

	export let color = 'secondary';
	export let value: string | number;
	export let reset: string | number;

	function resetValue() {
		value = reset;
	}
</script>

<Button outline {color} on:click={() => resetValue()}><Icon name="backspace-fill" /></Button>
