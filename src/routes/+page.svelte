<script lang="ts">
	import { currentUser } from '$lib/pocketbase';
</script>

{#if $currentUser}
	<p>
		Welcome {$currentUser.email}
	</p>
{:else}
	<p>Register or Login to continue</p>
{/if}
