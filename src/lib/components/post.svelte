<script lang="ts">
	export let title: string;
	export let content: string;
	export let author: string;
	export let community: string;
</script>
<div class="post">
	<h1>{community}</h1>
	<h1>{title}</h1>
	<h2>{author}</h2>
	<p>{content}</p>
</div>

<style>
	h1, h2, p {
		display: block;
	}

	.post {
		border-bottom: 1px solid #ccc;
		padding: 1em;
	}
</style>
