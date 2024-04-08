<script lang="ts">
	import Sidebar from '$lib/components/sidebar.svelte';
	import Header from '$lib/components/header.svelte';
	import './reset.css';
	import './global.css';
</script>

<Header />
<div class="page-layout">
	<Sidebar />
	<slot />
	<div />
</div>

<style>
	.page-layout {
		width: 100%;
		display: grid;
		grid-template-columns: 272px auto 272px;
	}
	
	@media (max-width: 960px) {
		.page-layout {
			grid-template-columns: auto;
		}
	}


</style>
