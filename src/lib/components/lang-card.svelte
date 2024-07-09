<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Word } from '$lib/response-types';
	import { Button } from './ui/button';

	let showSolution = false;

	function toggleSolution() {
		showSolution = !showSolution;
	}

	export let word: Word;
</script>

<Card.Root class="w-full max-w-2xl space-y-6 p-12">
	<Card.Header>
		<Card.Title class="capitalize">{word.language}</Card.Title>
		<Card.Description>1000 most used words</Card.Description>
	</Card.Header>
	<Card.Content class="prose">
		{#if showSolution}
			<h1>{word.english}</h1>
		{:else}
			<h1>{word.native}</h1>
		{/if}
	</Card.Content>
	<Card.Footer>
		<div class="flex w-full flex-row gap-4">
			{#if showSolution}
				<Button
					size="lg"
					class="w-full bg-green-500 hover:bg-green-500/75"
					on:click={toggleSolution}>Correct</Button
				>
				<Button size="lg" class="w-full" on:click={toggleSolution} variant="ghost">Hide</Button>
				<Button size="lg" class="w-full" on:click={toggleSolution} variant="destructive"
					>Wrong</Button
				>
			{:else}
				<Button size="lg" class="w-full" on:click={toggleSolution}>Show</Button>
			{/if}
		</div>
	</Card.Footer>
</Card.Root>
