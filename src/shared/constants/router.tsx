import type { RouteProps } from "react-router-dom";
import CarPage from "@/pages/CarPage/CarPage";
import MainPage from "@/pages/MainPage/MainPage";
import RentPage from "@/pages/RentPage/RentPage";

export enum AppRoutes {
	MAIN = "main",
	CAR = "car",
	RENT = "rent",
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.CAR]: "/car/:carId",
	[AppRoutes.RENT]: "/car/:carId/rent",
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
	[AppRoutes.RENT]: {
		path: RoutePath[AppRoutes.RENT],
		element: <RentPage />,
	},
};
