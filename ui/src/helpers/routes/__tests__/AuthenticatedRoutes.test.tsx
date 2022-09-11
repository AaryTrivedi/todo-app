import { render } from '@testing-library/react';

import AuthenticatedRoute from '../AuthenticatedRoute';
import LocalStorageMock from 'helpers/tests/localStorage';

global.localStorage = new LocalStorageMock();

describe("<AuthenticatedRoute />", function () {

	test("It renders children component if user is authenticated", function () {
		localStorage.setItem("accessToken", "test");
		const { getByText } = render(
			<AuthenticatedRoute>
				<div>I am visible.</div>
			</AuthenticatedRoute>
		)
		const element = getByText("I am visible.");
		expect(element).toBeInTheDocument();
	})

	test("It does not render route if user is not authenticated", function () {
		localStorage.clear();
		const { getByText } = render(<AuthenticatedRoute />);
		const element = getByText("You are not authenticated.");
		expect(element).toBeInTheDocument();
	})

})