import { render } from '@testing-library/react';

import UnauthenticatedRoute from '../UnauthenticatedRoute';
import LocalStorageMock from 'helpers/tests/localStorage';

global.localStorage = new LocalStorageMock();

describe("<AuthenticatedRoute />", function () {

	test("It renders children component if user is not authenticated", function () {
		localStorage.clear();
		const { getByText } = render(
			<UnauthenticatedRoute>
				<div>I am visible.</div>
			</UnauthenticatedRoute>
		)
		const element = getByText("I am visible.");
		expect(element).toBeInTheDocument();
	})

	test("It does not render route if user is authenticated", function () {
		localStorage.setItem("accessToken", "test");
		const { getByText } = render(<UnauthenticatedRoute />);
		const element = getByText("You are authenticated.");
		expect(element).toBeInTheDocument();
	})

})