import { useEffect } from "react";

export const Testing = () => {
	useEffect(() => {
		document.title = "Testing";
	}, []);

	return (
		<div>
			<h1>This is testing</h1>
		</div>
	);
};
