<script lang="ts">
	import { communities } from "$lib/stores";
</script>

<div id="communities">
	<div class="community-header">
		<h1>COMMUNITIES</h1>
	</div>
	{#each $communities as community}
		<div class="community">
			{community}
		</div>
	{/each}
	<div class="community" />
</div>

<style>

	h1 {
		font-weight: 250;
		color: #979797;
	}

	.community-header {
		padding-top: 1em;
		padding-bottom: 0.25em;
		width: 80%;
	}

	#communities {
		height: 100vh;
		border-right: 1px solid #ccc;
		overflow: scroll;
		display: grid;
		justify-items: center;
		padding-bottom: 1em;
	}

	.community {
		font-weight: 350;
		padding: 1em;
		border-radius: 10px;
		width: 80%;
	}

	.community:hover {
		background-color: #f0f0f0;
	}

</style>
