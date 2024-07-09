<script>
	import Navigation from '$lib/components/navigation.svelte';
	import '../app.css';
</script>

<div>
	<Navigation />
	<main class="container max-w-2xl">
		<slot></slot>
	</main>
</div>
