<script lang="ts">
	import { Keymander } from '$lib/model/Keymander';
	import {
		Carousel,
		CarouselControl,
		CarouselIndicators,
		CarouselItem,
		Image
	} from '@sveltestrap/sveltestrap';

	export let keymander: Keymander | null;

	let activeIndex: number = 0;
	$: items = keymanderImages(keymander);

	function keymanderImages(keymander: Keymander | null) {
		const list = [];
		activeIndex = 0;
		if (keymander !== null) {
			list.push({ src: `keymanders/${keymander?.frontImage}.png`, alt: keymander?.frontName });
			if (keymander.canFlip()) {
				list.push({
					src: `keymanders/${keymander?.backImage}.png`,
					alt: keymander?.backName || 'keymanderBackImage'
				});
			}
			if (keymander.hasToken()) {
				list.push({
					src: `keymanders/${keymander?.tokenImage}.png`,
					alt: keymander?.token || 'keymanderTokenImage'
				});
			}
			keymander.extraCards.forEach((card, i) => {
				list.push({
					src: `keymanders/${keymander?.id}${String.fromCharCode(i + 99)}.png`,
					alt: card
				});
			});
		}
		return list;
	}
</script>

{#if keymander !== null}
	<Carousel bind:activeIndex {items} ride={false}>
		<CarouselIndicators bind:activeIndex {items} />
		<div class="carousel-inner">
			{#each items as image, i}
				<CarouselItem bind:activeIndex itemIndex={i}>
					<Image fluid src={image.src} alt={image.alt} class="d-block w-100"></Image>
				</CarouselItem>
			{/each}
		</div>
		<CarouselControl direction="prev" bind:activeIndex {items} />
		<CarouselControl direction="next" bind:activeIndex {items} />
	</Carousel>
{:else}
	<Image fluid src="keymanders/KMBACK.png" alt="keymander back" />
{/if}
