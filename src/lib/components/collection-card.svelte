<script>
	import { Button } from './ui/button';
	export let title;
	export let subtitle;
	export let slug;
	export let emoji;
</script>

<div
	class="flex w-full max-w-xl flex-col items-center
            justify-center gap-6
            rounded-xl border bg-primary-foreground p-8 shadow-lg
            transition-all duration-200 hover:cursor-pointer hover:shadow-2xl"
>
	<div class="flex flex-col items-center gap-2">
		<span class="text-2xl font-semibold">{title}</span>
		<span class="text-md text-primary/65">{subtitle}</span>
	</div>
	<span class="text-3xl">{emoji}</span>

	<div class="flex w-full flex-col gap-2">
		<a href={slug} class="w-full">
			<Button class="w-full">Learn</Button>
		</a>
		<Button class="w-full" variant="outline" disabled>Details</Button>
	</div>
</div>
