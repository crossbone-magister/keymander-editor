<script lang="ts">
	import { Alert, Col, Container, Icon, Row } from '@sveltestrap/sveltestrap';
	export let color: string = 'primary';
	export let iconName: string = 'info-circle-fill';
</script>

<Alert {color}>
	<Container>
		<Row>
			<Col xs="1"><Icon name={iconName} /></Col>
			<Col>
				<slot></slot>
			</Col>
		</Row>
	</Container>
</Alert>
