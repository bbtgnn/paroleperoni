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
</script>

{#each labels as label}
	<div>
		<img src="{assets}/{label.file}" alt="" />
		<p>{label.word}</p>
	</div>
{/each}
