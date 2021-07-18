import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Error404 } from "./components/Error404";
import { Testing } from "./components/Testing";
import { Home } from "./components/Home";

export const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/testing">
					<Testing />
				</Route>
				<Route exact path="/404">
					<Error404 />
				</Route>
				<Route path="*">
					<Error404 />
				</Route>
			</Switch>
		</Router>
	);
};
