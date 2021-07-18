import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
	useEffect(() => {
		document.title = "404 Error - Page Not Found";
	}, []);

	return (
		<div className="my-5 text-center">
			<img src="/images/are_you_sure_about_that.gif" alt="" />
			<h1>404</h1>
			<h1>Page Not Found</h1>
			<div className="mt-4">
				<Link to="/">Go to Home Page</Link>
			</div>
		</div>
	);
};
