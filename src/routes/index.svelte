<script lang="ts">
	import _ from 'lodash';
	import json from '$lib/labels-list.json';
	import { assets } from '$app/paths';

	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import Image from '$lib/components/Image.svelte';
	import Navbar from '$lib/components/navbar.svelte';

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

{#each peroni as letter}
	<!-- Getting letter group -->
	{@const labels = groups[letter]}

	<div class="mb-12">
		<!-- Anchor -->
		<div id={letter} class="block h-0" />

		<!-- Navbar -->
		<Navbar letters={peroni} currentLetter={letter} />

		<!-- Content -->
		<div
			class="
				container mx-auto p-4
				grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch
			"
		>
			<!-- Labels -->
			{#if labels}
				{#each labels as label}
					<div class="flex flex-col flex-nowrap justify-between">
						<div>
							<IntersectionObserver once={true} let:intersecting>
								<div class="p-4 h-60 flex flex-row justify-center items-center">
									{#if intersecting}
										<Image classes="h-full" src={`${assets}/${label.file}`} alt={label.word} />
									{/if}
								</div>
							</IntersectionObserver>
						</div>
						<p class="font-mono px-2 pb-2 text-center">{label.word}</p>
					</div>
				{/each}
			{/if}

			<!-- Empty state -->
			{#if !labels || !labels.length}
				<p class="font-mono text-gray-400">No data</p>
			{/if}
		</div>
	</div>
{/each}
