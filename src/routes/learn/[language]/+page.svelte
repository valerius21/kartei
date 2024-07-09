<script lang="ts">
	import LangCard from '$lib/components/lang-card.svelte';
	import { currentCardIndex } from '$lib/index';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.words as word, i}
	{#if $currentCardIndex === i}
		<LangCard {word} />
	{/if}
{/each}
