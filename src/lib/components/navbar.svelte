<script lang="ts">
	import NavbarButton from './navbarButton.svelte';

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
	<hr class="border-[1px] border-slate-300 grow" />

	<!-- Letters -->
	<div class="space-x-1 flex flex-row flex-nowrap items-center justify-center">
		{#each letters as letter}
			<NavbarButton {letter} {currentLetter} />
		{/each}
	</div>

	<!-- Border dx -->
	<hr class="border-[1px] border-slate-300 grow" />
</div>
