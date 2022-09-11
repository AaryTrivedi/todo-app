import { render } from '@testing-library/react';

import Navbar from '../Navbar';

import LocalStorageMock from 'helpers/tests/localStorage';

global.localStorage = new LocalStorageMock();

describe("<Navbar />", () => {

	test("It renders successfully", () => {
		const { getByText } = render(<Navbar />);
		const logo = getByText("Todo");
		expect(logo).toBeInTheDocument();
	})

	test("It shows login button when user is not authenticated", () => {
		const { getByText } = render(<Navbar />);
		const element = getByText("Login");
		expect(element).toBeInTheDocument();
	})

	test("It shows signup button when user is not authenticated", () => {
		const { getByText } = render(<Navbar />);
		const element = getByText("Signup");
		expect(element).toBeInTheDocument();
	})

	test("It shows logout button when user is authenticated", () => {
		localStorage.setItem("accessToken", "test");
		const { getByText } = render(<Navbar />);
		const element = getByText("Logout");
		expect(element).toBeInTheDocument();
	})

})