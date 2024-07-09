<script>
	import { applyAction, enhance } from '$app/forms';
	import { currentUser, pb } from '$lib/pocketbase';
	import '../app.css';
</script>

<div>
	<nav>
		{#if $currentUser}
			<form
				method="POST"
				action="/logout"
				use:enhance={() => {
					return async ({ result }) => {
						pb.authStore.clear();
						await applyAction(result);
					};
				}}
			>
				<button type="submit">Logout</button>
			</form>
		{:else}
			<a href="/login">Login</a>
			<a href="/register">Register</a>
		{/if}
	</nav>
	<main class="container max-w-2xl">
		<slot></slot>
	</main>
</div>
