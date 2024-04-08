<script lang="ts">
	import { showMenu } from '$lib/stores';
	function sidebarClick() {
		$showMenu = !$showMenu;
		console.log($showMenu);
	}

</script>
<header>
	<div class="header-box">
		<div class="logo-container">
			<img on:click={sidebarClick} class="menu-icon" class:showMenu src="/menu.svg" alt="Menu icon"/>
			<a href="/">
				<img class="logo" src="/logo.png" alt="GatorSphere logo"/>
			</a>
			<a href="/" class="title">
				GatorSphere
			</a>
		</div>
		<a href="/login" class="signin login-btn">
			Sign In
		</a>
	</div>
</header>

<style>
	header {
		padding: var(--header-padding);
		padding-bottom: 0;
	}

	.signin {
		justify-self: end;
		border: none;
		line-height: 40px;
		text-align: center;
	}

	.title {
		padding-left: 0.25em;
		display: block;
		font-weight: bold;
		font-size: 2em;
		text-decoration: none;
		color: black;
	}

	.header-box {
		border-bottom: 1px solid;
		border-color: var(--border-color);
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		height: var(--header-height);
		padding-bottom: 0.5em
	}

	.logo-container {
		justify-self: start;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 1rem;
	}

	.logo {
		width: 40px;
	}

	.menu-icon {
		visibility: hidden;
		width: 0;
	}

	@media (max-width: 960px) {
		.menu-icon {
			width: 30px;
			margin-right: 1rem;
			visibility: visible;
		}
	}
	
</style>
