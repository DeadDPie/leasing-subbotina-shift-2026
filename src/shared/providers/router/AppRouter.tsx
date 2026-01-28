import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../constants/router";

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>loading...</div>}>
			<Routes>
				{Object.values(ROUTES).map(({ element, path }) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>
		</Suspense>
	);
};
