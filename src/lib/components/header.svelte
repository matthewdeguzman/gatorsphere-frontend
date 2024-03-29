<div class="header-box">
	<img src="/logo.png" alt="GatorSphere logo"/>
	<div class="logo-signin">
		<h1 class="title">
			GatorSphere
		</h1>
		<button class="signin">
			Sign In
		</button>
	</div>
</div>

<style>

	.logo-signin {
		display: grid;
		grid-template-columns: auto auto;
	}

	.signin {
		width: 70px;
		height: 35px;
		justify-self: end;
		border: none;
		border-radius: 15px;
		background-color: black;
		color: white;
	}

	.signin:hover {
		background-color: #505050;
	}

	.title {
		padding-left: 0.25em;
		display: block;
		font-weight: bold;
		font-size: 2em;
	}

	.header-box {
		display: grid;
		grid-template-columns: 50px auto;
		border-bottom: 1px solid #ccc;
		align-items: center;
		padding: var(--header-padding);
		height: var(--header-height);
	}

	img {
		width: 50px;
	}
	
</style>
