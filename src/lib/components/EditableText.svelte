<script lang="ts">
	import { FormGroup, Input } from '@sveltestrap/sveltestrap';

	export let contents: string;
</script>

<FormGroup>
	<Input
		type="text"
		bind:value={contents}
		class="form-control-plaintext fs-2"
		required
		minlength={1}
		invalid={contents.length <= 0}
		feedback="Keymander deck name should be al least one character"
	/>
</FormGroup>
