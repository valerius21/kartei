<script>
	import CollectionCard from './collection-card.svelte';
</script>

<div class="prose">
	<h1>Collections</h1>
	<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
		<CollectionCard
			title="Italian"
			subtitle="1000 most used words"
			slug="/learn/italian"
			emoji="🇮🇹"
		/>
		<CollectionCard
			title="French"
			subtitle="1000 most used words"
			slug="/learn/french"
			emoji="🇫🇷"
		/>
		<CollectionCard
			title="German"
			subtitle="1000 most used words"
			slug="/learn/german"
			emoji="🇩🇪"
		/>
		<CollectionCard
			title="Croatian"
			subtitle="1000 most used words"
			slug="/learn/croatian"
			emoji="🇭🇷"
		/>
	</div>
</div>
