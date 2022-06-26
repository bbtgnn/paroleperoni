<script lang="ts">
	export let color = '#000000';
	export let unit = 'px';
	export let durationNum = 0.6;
	export let durationUnit = 's';
	export let size = '60';
	export let borderRadius = 0;
</script>

<!--  -->

<div class="wrapper" style:--size="{size}{unit}" style:--duration="{durationNum}{durationUnit}">
	{#each [3, 2, 1] as i}
		<div
			class="dot"
			style:--dotSize="{+size * 0.25}{unit}"
			style:--color={color}
			style:border-radius="{borderRadius}{unit}"
			style:animation-delay="{i * (+durationNum / 10)}{durationUnit}"
		/>
	{/each}
</div>

<!--  -->
<style>
	.wrapper {
		height: var(--size);
		width: var(--size);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.dot {
		height: var(--dotSize);
		width: var(--dotSize);
		background-color: var(--color);
		margin: 2px;
		display: inline-block;
		animation: sync var(--duration) ease-in-out infinite alternate both running;
	}

	@-webkit-keyframes sync {
		33% {
			-webkit-transform: translateY(10px);
			transform: translateY(10px);
		}
		66% {
			-webkit-transform: translateY(-10px);
			transform: translateY(-10px);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
	}

	@keyframes sync {
		33% {
			-webkit-transform: translateY(10px);
			transform: translateY(10px);
		}
		66% {
			-webkit-transform: translateY(-10px);
			transform: translateY(-10px);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
	}
</style>
