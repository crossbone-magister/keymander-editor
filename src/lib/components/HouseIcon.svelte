<script lang="ts">
	export let house: string;

	export let showName: boolean = false;

	const HOUSE_SYMBOL_URL: Record<string, string> = {
		Ekwidon: 'https://mastervault-storage-prod.s3.amazonaws.com/media/houses/Ekwidon200.png',
		Shadows: 'https://mastervault-storage-prod.s3.amazonaws.com/media/houses/Shadows_z0n69GG.png',
		StarAlliance:
			'https://mastervault-storage-prod.s3.amazonaws.com/media/houses/Star_Alliance.png',
		Untamed: 'https://mastervault-storage-prod.s3.amazonaws.com/media/houses/Untamed_bXh9SJD.png',
		Dis: 'https://mastervault-storage-prod.s3.amazonaws.com/media/houses/Dis_OooSNPO.png',
		Logos: 'https://mastervault-storage-prod.s3.amazonaws.com/media/houses/Logos_2mOY1dH.png',
		Brobnar: 'https://mastervault-storage-prod.s3.amazonaws.com/media/houses/Brobnar_RTivg44.png',
		Sanctum: 'https://mastervault-storage-prod.s3.amazonaws.com/media/houses/Sanctum_lUWPG7x.png',
		Mars: 'https://mastervault-storage-prod.s3.amazonaws.com/media/houses/Mars_CmAUCXI.png',
		Saurian: 'https://mastervault-storage-prod.s3.amazonaws.com/media/houses/Saurian.png',
		Geistoid: 'https://mastervault-storage-prod.s3.amazonaws.com/media/houses/KF_Geistoid.png',
		Unfathomable: 'https://mastervault-storage-prod.s3.amazonaws.com/media/houses/Unfathomable.png'
	};
</script>

<img src={HOUSE_SYMBOL_URL[house]} alt={house} class:vertical={showName} />
{#if showName}
	<span>{house}</span>
{/if}

<style>
	img {
		width: var(--width, 2rem);
		height: var(--height, 2rem);
	}

	img.vertical {
		vertical-align: middle;
	}
</style>
