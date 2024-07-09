<script>
	import { applyAction, enhance } from '$app/forms';
	import { PUBLIC_APP_NAME } from '$env/static/public';

	import { currentUser, pb } from '$lib/pocketbase';
</script>

<nav
	class="flex flex-row items-center justify-between bg-primary px-12 py-6 text-primary-foreground"
>
	<h1 class="text-2xl font-bold">
		{PUBLIC_APP_NAME}
	</h1>
	<ul class="flex flex-row-reverse gap-4">
		{#if $currentUser}
			<li>
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
			</li>
		{:else}
			<li>
				<a href="/login">Login</a>
			</li>
			<li>
				<a href="/register">Register</a>
			</li>
		{/if}
	</ul>
</nav>
