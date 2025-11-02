<script lang="ts">
	import { page } from '$app/stores';
	import { Col, Container, Image, Row } from '@sveltestrap/sveltestrap';

	type DisplayMessage = { message: string; image: string };
	const ERRORS: Map<number, DisplayMessage> = new Map();
	ERRORS.set(404, {
		message: 'Page not found',
		image:
			'https://keyforge-card-images.s3-us-west-2.amazonaws.com/card-images-houses/untamed/lost-in-the-wild.png'
	});
	ERRORS.set(500, {
		message: 'Internal error',
		image:
			'https://keyforge-card-images.s3-us-west-2.amazonaws.com/card-images-houses/logos/sloppy-labwork.png'
	});
</script>

{#key $page.url}
	<Container>
		{@const display = ERRORS.get($page.status) || ERRORS.get(500)}
		<Row class="justify-content-center align-items-center">
			<Col sm="12" md={{ size: 6, offset: 3 }}>
				<h1>{display.message}</h1>
				<Image src={display.image} alt={display.error} />
			</Col>
		</Row>
	</Container>
{/key}
