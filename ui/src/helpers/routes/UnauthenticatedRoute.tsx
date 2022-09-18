import React from 'react';

import useIsAuthenticated from 'hooks/auth/useIsAuthenticated';

function AuthenticatedRoute(props: any) {

	const isAuthenticated = useIsAuthenticated();

	if (isAuthenticated) {
		return (
			<div>
				You are authenticated.
			</div>
		)
	}

	return (
		props.children
	)
}

export default AuthenticatedRoute;