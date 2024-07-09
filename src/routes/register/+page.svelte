<script>
	import { applyAction, enhance } from '$app/forms';
	import { pb } from '$lib/pocketbase';
</script>

<form
	method="POST"
	use:enhance={() => {
		return async ({ result }) => {
			pb.authStore.loadFromCookie(document.cookie);
			await applyAction(result);
		};
	}}
>
	<h1>Register</h1>
	<div class="flex flex-col gap-4">
		<input type="email" name="email" placeholder="Email" />
		<input type="password" name="password" placeholder="Password" />
		<input type="password" name="passwordConfirm" placeholder="Confirm Password" />
		<button type="submit">Register</button>
	</div>
</form>
