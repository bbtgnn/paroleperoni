<script lang="ts">
	import json from '$lib/labels-list.json';
	import { assets } from '$app/paths';

	const labelNames: Array<string> = json;
	const labels: Array<{ word: string; file: string }> = [];
	for (let l of labelNames) {
		labels.push({
			word: l.replace('.png', ''),
			file: `labels/${l}`
		});
	}
	labels.sort((a, b) => a.word.toLowerCase().localeCompare(b.word.toLowerCase()));
</script>

<!--  -->

<!-- Navbar -->
<nav class="sticky top-0 flex bg-red-800 border-b-2 border-white">
	<div class="px-4 py-2 container mx-auto font-mono text-white">paroleperoni</div>
</nav>

<!-- Content -->
<div
	class="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 items-stretch"
>
	{#each labels as label}
		<div class="flex flex-col flex-nowrap justify-between border-2 border-gray-300">
			<img src="{assets}/{label.file}" alt="" />
			<p class="bg-gray-300 font-mono p-2 text-center">{label.word}</p>
		</div>
	{/each}
</div>
