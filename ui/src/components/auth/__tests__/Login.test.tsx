import { render } from "@testing-library/react";

import Login from '../Login';

describe("<Login />", function () {

	describe("Render", function () {
		test("It renders without errors.", function () {
			render(<Login />);
		});

		test("It shows email field.", function () {
			const { getByLabelText } = render(<Login />);
			const emailField = getByLabelText("Email");
			expect(emailField).toBeInTheDocument();
		})

		test("It shows password field.", function () {
			const { getByLabelText } = render(<Login />);
			const passwordField = getByLabelText("Password");
			expect(passwordField).toBeInTheDocument();
		})

		test("It shows login button.", function () {
			const { getByText } = render(<Login />);
			const loginButton = getByText("Login");
			expect(loginButton).toBeInTheDocument();
		})
	})

})