<script lang="ts">
	import Collections from '$lib/components/collections.svelte';
	import { currentUser } from '$lib/pocketbase';
</script>

{#if $currentUser}
	<div class="container">
		<p>
			Welcome {$currentUser.email}
		</p>
		<Collections />
	</div>
{:else}
	<p>Register or Login to continue</p>
{/if}
