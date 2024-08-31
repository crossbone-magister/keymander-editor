<script lang="ts">
	import type { Card } from '$lib/model/Card';

	export let card: Card;

	const RARITY_SYMBOL: Record<string, string> = {
		Common: '⚫',
		Uncommon: '🔷',
		Rare: '⭐',
		Special: '💠'
	};
</script>

<p>{RARITY_SYMBOL[card.rarity]} {card.name}</p>
