<script lang="ts">
	import { page } from "$app/stores";
	$: signup = $page.url.searchParams.get("signup") || false;
</script>
<div class="login-wrapper">
	<div />
		<div>
		<form action="/" method="get" class="login-form">
			<div class="login-box">
				<label for="username">Username <p class="req" title="required">*</p></label>
				<input 
					type="text" 
					id="username" 
					name="username" 
					required
			  >
			</div>
			<div class="login-box">
				<label for="password">Password <p class="req" title="required">*</p></label>
				<input type="password" id="password" name="password" required>
			</div>
			<input class="login-btn" type="submit" value={signup ? "Sign Up" : "Log In"}>
		</form>
		<div class="sign-up-wrapper">
			{#if signup}
				<p class="sign-up-text">Already have an account? <a class="sign-up-text" href="/login">Log in</a></p>
			{:else}
				<p class="sign-up-text">New to GatorSphere? <a class="sign-up-text" href="/login?signup=true">Sign up</a></p>
			{/if}
		</div>
	</div>
	<div />
</div>
<style>

	.req {
		display: inline;
		color: red;
		font-size: 1.1em;
	}

	.login-wrapper {
		display: grid;
		grid-template-columns: auto minmax(auto, 350px) auto;
	}

	.login-form {
		margin-top: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.sign-up-wrapper {
		margin-top: 3em;
		justify-self: start;
	}

	.sign-up-text {
		font-weight: 300;
	}

	.login-box {
		margin-top: 1em;
		width: 100%;
	}
	
	label {
		font-weight: 600;
		font-size: 1.2em;
	}

	input {
		width: 100%;
		height: 2em;
		border: 1px solid;
		border-color: var(--border-color);
		border-radius: 5px;
		font-size: 1.3em;
		padding-left: 0.5em;
		margin-top: 0.25em;
	}

	input[type="submit"] {
		margin-top: 1em;
		border-radius: 10px;
		width: 5em;
		height: 2.5em;
		border: none;
		color: white;
		font-size: 1em
	}

</style>
