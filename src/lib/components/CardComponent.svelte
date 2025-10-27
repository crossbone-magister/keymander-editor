<script lang="ts">
	import type { Card } from '$lib/model/Card';
	import { Icon, Image, Popover } from '@sveltestrap/sveltestrap';

	const invalidChars = /\W/g;

	export let card: Card;
	let iconName;
	switch (card.rarity) {
		case 'Common':
			iconName = 'circle-fill';
			break;
		case 'Uncommon':
			iconName = 'diamond-fill';
			break;
		case 'Rare':
			iconName = 'star-fill';
			break;
		case 'Special':
			iconName = 'stars';
			break;
		default:
			iconName = 'question';
			break;
	}
	console.log();
	const cleanName = card.name.toLowerCase().replaceAll(invalidChars, '');
	const salt = Math.ceil(Math.random() * 1000);
	const id = `${cleanName}-${salt}`;
</script>

<span {id} class="text-truncate">
	<Icon name={iconName} />
	{card.name}
</span>
<Popover
	target={id}
	placement="auto"
	trigger="hover"
	title={card.name}
	style="min-width: 300px; min-height: 420px;"
>
	<Image fluid src={card.image} alt={card.name}></Image>
</Popover>
