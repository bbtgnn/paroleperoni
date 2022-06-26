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

<div
	class="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-8 pt-0 items-stretch"
>
	{#each peroni as letter}
		<!-- Getting letter group -->
		{@const labels = groups[letter]}

		<div id={letter} class="col-span-full h-1 mb-[-1rem]" />
		<div
			class="
				mt-[-1rem]
				py-2 space-x-4 col-span-full bg-white
				flex flex-row flex-nowrap items-center justify-center
				self-start sticky top-0"
		>
			<hr class="border-[1px] border-red-600 grow" />
			<div class="space-x-1 flex flex-row flex-nowrap items-center justify-center">
				{#each peroni as letterIndex}
					<a
						href="#{letterIndex}"
						class="
					 w-10 h-10 rounded-lg
					flex flex-row flex-nowrap items-center justify-center
					{letter == letterIndex ? 'bg-red-600' : 'border-2 border-red-600'}
				"
					>
						<p
							class="
						font-mono 
						{letter == letterIndex ? 'text-white' : 'text-red-600'}
					"
						>
							{letterIndex.toUpperCase()}
						</p>
					</a>
				{/each}
			</div>
			<hr class="border-[1px] border-red-600 grow" />
		</div>

		<!-- Drawing labels -->
		{#if labels}
			{#each labels as label}
				<div class="flex flex-col flex-nowrap justify-between">
					<div class="p-4 flex flex-row justify-center items-center">
						<img class="h-60" src={`${assets}/${label.file}`} alt={label.word} loading="lazy" />
					</div>
					<!-- <IntersectionObserver once={true} let:intersecting>
									{#if intersecting}
								<Image src={`${assets}/${label.file}`} alt={label.word} />
								{/if}
							</IntersectionObserver> -->
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
