<script lang="ts">
	import { showMenu, communities } from "$lib/stores";
</script>

<div class="communities height-wo-header styled-scrollbar" class:hidden={!$showMenu}>
	<div class="community-header">
		<h1>COMMUNITIES</h1>
	</div>
	{#each $communities as community}
		<div class="community">
			<p>{community}</p>
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

	.communities {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		border-right: 1px solid;
		border-color: var(--border-color);
		overflow: scroll;
		align-items: center;
		transition: width 0.5s ease;
		position: absolute;
		background: white;
	}

	@media (max-width: 960px) {
		.communities {
			width: 0;
		}
		.communities.hidden {
			width: 200px;
		}
	}

	.community {
		box-sizing: border-box;
		font-weight: 350;
		padding: 1em;
		border-radius: 10px;
		width: 90%;
		cursor: pointer;
	}

	.community > p {
		white-space: nowrap;
	}

	.community:hover {
		background-color: var(--background-hover);
	}

</style>
