import React from 'react';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import useIsAuthenticated from 'hooks/auth/useIsAuthenticated';

function Navbar() {

	const isAuthenticated = useIsAuthenticated();

	debugger;

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
	            	Todo
	          	</Typography>
	          	{
	          		!isAuthenticated && (
	          			<>
	          				<Button color="inherit">Login</Button>
	          				<Button color="inherit">Signup</Button>
	          			</>
          			)
	          	}
	          	{
	          		isAuthenticated && (
	          			<>
	          				<Button color="inherit">Logout</Button>
	          			</>
          			)
	          	}
          	</Toolbar>
		</AppBar>
	);
}

export default Navbar;