import type { RouteProps } from "react-router-dom";
import CarPage from "../../pages/CarPage/CarPage";
import MainPage from "../../pages/MainPage/MainPage";

export enum AppRoutes {
	MAIN = "main",
	CAR = "car",
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.CAR]: "/car",
};

export const ROUTES: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		element: <MainPage />,
	},
	[AppRoutes.CAR]: {
		path: RoutePath[AppRoutes.CAR],
		element: <CarPage />,
	},
};
