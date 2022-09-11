import useIsAuthenticated from '../useIsAuthenticated';

import LocalStorageMock from 'helpers/tests/localStorage';

global.localStorage = new LocalStorageMock;

describe("useIsAuthenticated()", function () {

	test("It can be called", function () {
		useIsAuthenticated();
	})

	test("It returns false if user is logged out", function () {
		const isAuthenticated = useIsAuthenticated();
		expect(isAuthenticated).toBe(false);
	})

	test("It returns true if user is logged in", function () {
		localStorage.setItem("accessToken", "value");
		const isAuthenticated = useIsAuthenticated();
		expect(isAuthenticated).toBe(true);
	})

});