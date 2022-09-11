import React from 'react';

function useIsAuthenticated() {
	const isAuthenticated = localStorage.getItem("accessToken") !== null;
	return isAuthenticated;
}

export default useIsAuthenticated;