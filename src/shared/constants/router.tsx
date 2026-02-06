import { generatePath } from "react-router-dom";

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

type RouteConfig = {
	path: string;
	to: (...args: any[]) => string;
};

export const ROUTES: Record<AppRoutes, RouteConfig> = {
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		to: () => RoutePath[AppRoutes.MAIN],
	},

	[AppRoutes.CAR]: {
		path: RoutePath[AppRoutes.CAR],
		to: (carId: string | number) =>
			generatePath(RoutePath[AppRoutes.CAR], { carId }),
	},

	[AppRoutes.RENT]: {
		path: RoutePath[AppRoutes.RENT],
		to: (carId: string | number) =>
			generatePath(RoutePath[AppRoutes.RENT], { carId }),
	},
};
