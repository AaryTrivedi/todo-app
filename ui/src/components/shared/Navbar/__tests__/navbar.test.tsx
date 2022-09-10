import { render } from '@testing-library/react';

import Navbar from '../Navbar';

describe("<Navbar />", () => {

	test("It renders successfully", () => {
		const { getByText } = render(<Navbar />);
		const logo = getByText("Todo");
		expect(logo).toBeInTheDocument();
	})

})