<header>
	<div class="header-box">
		<a href="/">
			<img src="/logo.png" alt="GatorSphere logo"/>
		</a>
		<a href="/" class="title">
			GatorSphere
		</a>
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
		grid-template-columns: 50px auto auto;
		align-items: center;
		height: var(--header-height);
		padding-bottom: 0.5em
	}

	img {
		width: 50px;
	}
	
</style>
