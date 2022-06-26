<script lang="ts">
	export let currentLetter: string;
	export let letters: Array<string>;

	if (!letters.includes(currentLetter)) {
		throw new Error('InvalidCurrentLetter');
	}
</script>

<!--  -->

<div
	class="
			sticky top-0 px-4 py-2 space-x-4 bg-white
			flex flex-row flex-nowrap items-center justify-center
"
>
	<!-- Border sx -->
	<hr class="border-[1px] border-red-600 grow" />

	<!-- Letters -->
	<div class="space-x-1 flex flex-row flex-nowrap items-center justify-center">
		{#each letters as letter}
			<a
				href="#{letter}"
				class="
					w-10 h-10 rounded-lg
					flex flex-row flex-nowrap items-center justify-center
					{currentLetter == letter ? 'bg-red-600' : 'border-2 border-red-600'}
			"
			>
				<p
					class="
						font-mono 
						{currentLetter == letter ? 'text-white' : 'text-red-600'}
				"
				>
					{letter.toUpperCase()}
				</p>
			</a>
		{/each}
	</div>

	<!-- Border dx -->
	<hr class="border-[1px] border-red-600 grow" />
</div>
