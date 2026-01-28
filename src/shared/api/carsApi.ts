import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CarsResponse } from "@shared/types/car";
import { API_URL } from "../constants/url";

export const carsApi = createApi({
	reducerPath: "carsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `${API_URL}`,
	}),
	endpoints: (builder) => ({
		getCars: builder.query<CarsResponse, void>({
			query: () => "/cars/info",
		}),
	}),
});

export const { useGetCarsQuery } = carsApi;
