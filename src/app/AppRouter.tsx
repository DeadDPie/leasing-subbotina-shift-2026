import { Route, Routes } from "react-router-dom";
import CarPage from "@/pages/CarPage/CarPage";
import MainPage from "@/pages/MainPage/MainPage";
import RentPage from "@/pages/RentPage/RentPage";
import { AppRoutes, ROUTES } from "@/shared/constants/router";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path={ROUTES[AppRoutes.MAIN].path} element={<MainPage />} />
			<Route path={ROUTES[AppRoutes.CAR].path} element={<CarPage />} />
			<Route path={ROUTES[AppRoutes.RENT].path} element={<RentPage />} />
		</Routes>
	);
};
