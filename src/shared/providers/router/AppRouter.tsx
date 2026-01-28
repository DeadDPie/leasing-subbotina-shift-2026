import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../constants/router";

export const AppRouter = () => {
	return (
		<Routes>
			{Object.values(ROUTES).map(({ element, path }) => (
				<Route key={path} path={path} element={element} />
			))}
		</Routes>
	);
};
