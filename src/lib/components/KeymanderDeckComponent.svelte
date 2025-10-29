<script lang="ts">
	import { Constants } from '$lib/model/Constants';
	import type { Pod } from '$lib/model/Pod';
	import { Button, Col, Container, Icon, Row, Tooltip } from '@sveltestrap/sveltestrap';
	import { createEventDispatcher } from 'svelte';
	import { KeymanderDeck } from '../model/KeymanderDeck';
	import CardComponent from './CardComponent.svelte';
	import HouseIcon from './HouseIcon.svelte';
	import KeymanderComponent from './KeymanderComponent.svelte';
	import PodPlaceholder from './PodPlaceholder.svelte';

	export let deck: KeymanderDeck;
	export let editable: boolean = false;

	const dispatch = createEventDispatcher();

	function dispatchSelectedPodEvent(pod: Pod) {
		dispatch('podSelected', pod);
	}
</script>

<Container>
	<Row>
		<Col xs=12 md=2 class="align-self-center"><KeymanderComponent keymander={deck.keymander} /></Col>
		<Col xs="12" md="auto">
			<Container>
				<Row class="p-2 gap-4">
					{#each deck.pods
						.sort((a, b) => a.house.localeCompare(b.house))
						.slice(0, Constants.MAX_POD_PER_DECK / 2) as pod (pod.id)}
						{@const id = `delete-pod-${pod.id}`}
						<Col>
							<Container>
								<Col>
									<HouseIcon house={pod.house} --width="2.5rem" --height="2.5rem" showName={true} />
									{#if editable}
										<Button
											{id}
											on:click={() => dispatchSelectedPodEvent(pod)}
											size="sm"
											color="danger"
										>
											<Icon name="trash-fill" />
										</Button>
									{/if}
									<Tooltip target={id} placement="top">Remove pod</Tooltip>
								</Col>
							</Container>
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
					{#each { length: Constants.MAX_POD_PER_DECK / 2 } as _, i}
						{#if i >= deck.pods.length}
							<Col>
								<PodPlaceholder />
							</Col>
						{/if}
					{/each}
				</Row>
				<Row class="p-2 gap-4">
					{#each deck.pods
						.sort((a, b) => a.house.localeCompare(b.house))
						.slice(Constants.MAX_POD_PER_DECK / 2, Constants.MAX_POD_PER_DECK) as pod (pod.id)}
						{@const id = `delete-pod-${pod.id}`}
						<Col>
							<Container>
								<Col>
									<HouseIcon house={pod.house} --width="2.5rem" --height="2.5rem" showName={true} />
									{#if editable}
										<Button
											{id}
											on:click={() => dispatchSelectedPodEvent(pod)}
											size="sm"
											color="danger"
										>
											<Icon name="trash-fill" />
										</Button>
										<Tooltip target={id} placement="top">Remove pod</Tooltip>
									{/if}
								</Col>
							</Container>
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
					{#each { length: Constants.MAX_POD_PER_DECK / 2 } as _, i}
						{#if i + Constants.MAX_POD_PER_DECK / 2 >= deck.pods.length}
							<Col>
								<PodPlaceholder />
							</Col>
						{/if}
					{/each}
				</Row>
			</Container>
		</Col>
	</Row>
</Container>
