<script>
	/* eslint @typescript-eslint/no-unused-vars: "warn" */
	import { Constants } from '$lib/model/Constants';
</script>

<span>
	<span>
		<span class="placeholder col-6 bg-secondary reset-cursor"></span>
	</span>
	<hr />
	{#each { length: Constants.MAX_CARDS_PER_POD } as _}
		<span>
			<span class="placeholder col-2 bg-secondary reset-cursor"></span>
			<span class="placeholder col-9 bg-secondary reset-cursor"></span>
		</span>
	{/each}
</span>

<style>
	.reset-cursor {
		cursor: default;
	}
</style>
