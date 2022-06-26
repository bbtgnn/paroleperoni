<script lang="ts">
	import { onMount } from 'svelte';
	import Spinner from './spinner.svelte';

	export let src: string;
	export let alt: string;
	export let classes: string = '';

	let loaded = false;
	let failed = false;
	let loading = true;

	onMount(() => {
		const img = new Image();
		img.src = src;
		loading = true;

		img.onload = () => {
			loading = false;
			loaded = true;
		};
		img.onerror = () => {
			loading = false;
			failed = true;
		};
	});
</script>

<!--  -->

{#if loaded}
	<img class={classes} {src} {alt} loading="lazy" />
{:else if failed}
	<p class="font-mono text-gray-400">Image not found</p>
{:else if loading}
	<Spinner color="#cbd5e1" borderRadius={5} />
{/if}
