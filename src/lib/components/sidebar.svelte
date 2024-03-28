<script lang="ts">
	import { communities } from "$lib/stores";
</script>

<div id="communities">
	{#each $communities as community}
		<p>{community}</p>
	{/each}
</div>

<style>
	#communities {
		border-right: 1px solid #ccc;
	}
</style>
