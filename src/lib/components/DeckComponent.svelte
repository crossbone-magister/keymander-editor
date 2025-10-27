<script lang="ts">
	import type { Deck } from '$lib/model/Deck';
	import type { Pod } from '$lib/model/Pod';
	import {
		Button,
		Card,
		CardBody,
		CardHeader,
		Col,
		Container,
		Icon,
		Popover,
		Row
	} from '@sveltestrap/sveltestrap';
	import { createEventDispatcher } from 'svelte';
	import CardComponent from './CardComponent.svelte';
	import HouseIcon from './HouseIcon.svelte';

	export let deck: Deck;
	export let showTitle: boolean = false;

	const dispatch = createEventDispatcher();

	function dispatchSelectedPodEvent(pod: Pod) {
		dispatch('podSelected', pod);
	}
</script>

<Card>
	{#if showTitle}
		<CardHeader><h2>{deck.name}</h2></CardHeader>
	{/if}
	<CardBody>
		<Container>
			<Row>
				{#each deck.pods as pod (pod.id)}
					{@const buttonId = `select-pod-${pod.id}`}
					<Col xs="4">
						<HouseIcon house={pod.house} showName={true} --width="2.5rem" --height="2.5rem" />
						<Button
							id={buttonId}
							size="sm"
							color="primary"
							on:click={() => {
								dispatchSelectedPodEvent(pod);
							}}><Icon name="plus-circle" /></Button
						>
						<Popover target={buttonId} trigger="hover" theme="dark">Add to deck</Popover>
						<hr />
						<Container>
							{#each pod.cards as card}
								<Row>
									<Col>
										<CardComponent {card} />
									</Col>
								</Row>
							{/each}
						</Container>
					</Col>
				{/each}
			</Row>
		</Container>
	</CardBody>
</Card>
