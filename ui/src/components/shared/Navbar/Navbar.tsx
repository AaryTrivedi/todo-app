import React from 'react';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

function Navbar() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
	            	Todo
	          	</Typography>
          	</Toolbar>
		</AppBar>
	);
}

export default Navbar;