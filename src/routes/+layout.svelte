<script>
	import Navigation from '$lib/components/navigation.svelte';
	import '../app.css';
</script>

<div class="flex min-h-screen w-full flex-col bg-muted">
	<Navigation />
	<main class="container flex max-w-2xl flex-1 flex-col items-center justify-center">
		<slot></slot>
	</main>
</div>
