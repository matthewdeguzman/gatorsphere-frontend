<script lang="ts">
	import { communities } from "$lib/stores";
</script>

<div id="communities" class="height-wo-header styled-scrollbar">
	<div class="community-header">
		<h1>COMMUNITIES</h1>
	</div>
	{#each $communities as community}
		<div class="community">
			{community}
		</div>
	{/each}
</div>

<style>

	h1 {
		font-weight: 250;
		color: #979797;
	}

	.community-header {
		box-sizing: border-box;
		padding: 1em 0 0.25em 1em;
		width: 90%;
	}

	#communities {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		border-right: 1px solid #ccc;
		overflow: scroll;
		align-items: center;
	}

	.community {
		box-sizing: border-box;
		font-weight: 350;
		padding: 1em;
		border-radius: 10px;
		width: 90%;
	}

	.community:hover {
		background-color: #f0f0f0;
	}

</style>
