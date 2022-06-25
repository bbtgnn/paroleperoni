<script lang="ts">
	import _ from 'lodash';
	import json from '$lib/labels-list.json';
	import { assets } from '$app/paths';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import Image from '$lib/components/Image.svelte';

	// Getting filenames
	const filenames: Array<string> = json;
	// Sorting
	filenames.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

	// Structuring data
	const items = filenames.map((f) => {
		return {
			word: f.replace('.png', ''),
			file: `labels/${f}`
		};
	});

	// Grouping
	const groups = _.groupBy(items, (f) => f.word.charAt(0));

	// Letters array
	const peroni = 'peroni'.split('');
</script>

<!--  -->

<!-- Navbar -->
<nav
	class="
		px-4 py-2 space-x-1
		sticky top-0
		flex flex-nowrap justify-center items-baseline
		bg-red-800
		border-b-2 border-white
		z-50"
>
	<p class="font-mono text-white mr-1">PAROLE</p>
	{#each peroni as letter}
		<a
			class="
				bg-red-600 w-10 h-10
				flex flex-row flex-nowrap items-center justify-center
				rounded-lg
			"
			href="#{letter}"
		>
			<p class="font-mono text-white">{letter.toUpperCase()}</p>
		</a>
	{/each}
</nav>

<!-- Content -->
<div
	class="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 items-stretch"
>
	{#each peroni as letter}
		<!-- Getting letter group -->
		{@const labels = groups[letter]}

		<!-- Section title -->
		<h1
			class="col-span-full self-start capital text-xl font-mono p-3 bg-gray-400 z-40 mt-16"
			id={letter}
		>
			{letter.toUpperCase()}
		</h1>

		<!-- Drawing labels -->
		{#if labels}
			{#each labels as label}
				<div class="flex flex-col flex-nowrap justify-between">
					<IntersectionObserver once={true} let:intersecting>
						{#if intersecting}
							<div class="w-full h-full flex flex-row flex-nowrap justify-center p-4">
								<Image src={`${assets}/${label.file}`} alt={label.word} />
							</div>
						{/if}
					</IntersectionObserver>
					<p class="bg-gray-200 font-mono p-2 text-center">{label.word}</p>
				</div>
			{/each}
		{/if}

		<!-- Empty state -->
		{#if !labels || !labels.length}
			<p class="font-mono text-gray-400">No data</p>
		{/if}
	{/each}
</div>
