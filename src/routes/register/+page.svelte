<script>
	import { applyAction, enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { pb } from '$lib/pocketbase';
</script>

<Card class="w-full max-w-2xl space-y-6 p-12">
	<form
		class="prose w-full"
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
			<Input type="email" name="email" placeholder="Email" />
			<Input type="password" name="password" placeholder="Password" />
			<Input type="password" name="passwordConfirm" placeholder="Confirm Password" />
			<Button type="submit">Register</Button>
		</div>
	</form>
</Card>
