
<form class="login-form">
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
		<input type="text" id="password" name="password" required>
	</div>
	<input class="login-btn" type="submit" value="Log In">
</form>

<style>

	.req {
		display: inline;
		color: red;
		font-size: 1.1em;
	}

	.login-form {
		margin: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.login-box {
		display: flex;
		flex-direction: column;
		margin-bottom: 1em;
		width: 100%;
		max-width: 350px;
	}
	
	label {
		font-weight: 600;
		margin-bottom: 0.5em;
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
	}

	input[type="submit"] {
		border-radius: 10px;
		width: 5em;
		height: 2.5em;
		border: none;
		color: white;
		font-size: 1em
	}

</style>
