<script lang="ts">
	import LangCard from '$lib/components/lang-card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.words as word}
	<LangCard {word} />
{/each}
