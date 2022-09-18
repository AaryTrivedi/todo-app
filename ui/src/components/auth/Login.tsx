import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
	return (
		<form>
			<div>
				<TextField
					data-testid="email"
					label="Email" />
			</div>
			<div>
				<TextField
					data-testid="password"
					label="Password" />
			</div>
			<div>
				<Button
					variant="contained">
					Login
				</Button>
			</div>
		</form>
	)
};

export default Login;