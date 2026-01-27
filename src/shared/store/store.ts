import { configureStore } from "@reduxjs/toolkit";
import { carsApi } from "@shared/api/carsApi";

export const store = configureStore({
	reducer: {
		[carsApi.reducerPath]: carsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(carsApi.middleware),
});
