<script lang="ts">
	import Sidebar from '$lib/components/sidebar.svelte';
	import './reset.css';
	import './global.css';
</script>

<header>
	Club Forum
</header>

<div id="page-layout">
	<Sidebar />
	<slot />
</div>

<style>
	header {
		border-bottom: 1px solid #ccc;
		display: block;
		font-size: 1.5em;
	}


	#page-layout {
		display: grid;
		grid-template-columns: 300px auto;
	}

</style>
