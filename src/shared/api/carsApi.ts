import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
	CarResponse,
	CarsPaginatedResponse as CarsResponse,
	GetCarParams,
	GetCarsParams,
} from "@shared/types/car/generated";
import { API_URL } from "../constants/url";

export const carsApi = createApi({
	reducerPath: "carsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `${API_URL}`,
	}),
	endpoints: (builder) => ({
		getCars: builder.query<CarsResponse, GetCarsParams>({
			query: (params) => ({ url: "/cars/info", params }),
		}),
		getCar: builder.query<CarResponse, GetCarParams>({
			query: ({ carId }) => `/cars/info/${carId}`,
		}),
	}),
});

export const { useGetCarsQuery, useGetCarQuery } = carsApi;
