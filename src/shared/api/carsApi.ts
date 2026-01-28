import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CarsResponse } from "@shared/types/car";
import { API_URL } from "../constants/url";

export interface GetCarsParams {
	search?: string;
}

export const carsApi = createApi({
	reducerPath: "carsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `${API_URL}`,
	}),
	endpoints: (builder) => ({
		getCars: builder.query<CarsResponse, GetCarsParams>({
			query: (params) => ({ url: "/cars/info", params }),
		}),
	}),
});

export const { useGetCarsQuery } = carsApi;
