<script lang="ts">
	export let letter: string;
	export let currentLetter: string;
</script>

<!--  -->

<a
	href="#{letter}"
	class="
    w-10 h-10 rounded-lg
    flex flex-row flex-nowrap items-center justify-center
    {currentLetter == letter ? 'bg-peroni-600' : 'border-2 border-peroni-600 hover:bg-peroni-100'}
"
>
	<p
		class="
        font-mono 
        {currentLetter == letter ? 'text-white' : 'text-peroni-600'}
    "
	>
		{letter.toUpperCase()}
	</p>
</a>
