<script lang="ts">
	export let title: string;
	export let content: string;
	export let community: string;
	export let club: string;
</script>

<div class="post-box">
	<div class="post-wrapper">
		<div class="post-header">
			<p class="community-tag">{community}</p>
			<p class="club">| {club}</p>
			<p class="time">• 11 hr. ago</p>
		</div>
		<h1 class="title">{title}</h1>
		<p class="content">{content}</p>

		<div class="post-footer">
			<button class="footer-button comment">
				<img class="icon comment-icon" src="/comment.svg" alt="comment"/>
				<p class="comment-count">10</p>
			</button>
			<button class="footer-button share">
				<img class="icon share-icon" src="/share.svg" alt="share"/>
				<p class="share-content">Share</p>
			</button>
		</div>
	</div>
</div>

<style>

	.title {
		font-size: 1.5em;
		font-weight: 600;
		margin-bottom: 0.3em;
	}

	.time, .community-tag, .club {
		display: inline;
		font-size: 0.8em;
		color: #676767;
	}

	.community-tag {
		font-weight: 600;
		color: black;
	}

	.club {
		color: black;
	}

	.post-header {
		margin-bottom: 0.5em;
	}

	.post-box {
		border-bottom: 1px solid;
		border-color: var(--border-color);
		padding-bottom: 0.5em;
		margin-top: 0.5em;
		margin-left: 0.75em;
	}

	.post-wrapper {
		padding: 1em;
		max-width: 600px;
		border-radius: 10px;
	}

	.post-wrapper:hover {
		background-color: var(--background-hover);
	}

	.post-footer {
		margin-top: 1em;
		display: grid;
		grid-template-columns: auto auto;
		height: 35px;
	}

	.content {
		display: block;
		line-height: 1.25em;
	}

	.footer-button {
		background-color: var(--header-button-color);
		border: none;
		border-radius: 10px;
		height: 100%;
		width: fit-content;
	}

	.footer-button:hover {
		background-color: var(--header-button-hover-color);
	}

	.comment {
		justify-self: begin;
	}

	.share {
		justify-self: end;
	}

	.share-content, .comment-count {
		display: inline;
	}

	.icon {
		vertical-align: middle;
		padding-right: 0.25em;
	}

	.comment-icon {
		width: 1.5em;
	}

	.share-icon {
		width: 1em;
	}
</style>
