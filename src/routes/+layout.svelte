<script lang="ts">
	import Sidebar from '$lib/components/sidebar.svelte';
	import Header from '$lib/components/header.svelte';
	import './reset.css';
	import './global.css';
</script>

<Header />
<div id="page-layout">
	<Sidebar />
	<slot />
	<div />
</div>

<style>
	#page-layout {
		width: 100%;
		display: grid;
		grid-template-columns: 272px auto 272px;
	}

</style>
