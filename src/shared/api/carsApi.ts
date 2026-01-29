import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
	BodyType,
	Brand,
	CarColor,
	CarResponse,
	CarsResponse,
	Steering,
	Transmission,
} from "@shared/types/car";
import { API_URL } from "../constants/url";

export interface GetCarsParams {
	search?: string;
	maxPrice?: number;
	minPrice?: number;
	transmission?: Transmission;
	bodyType?: BodyType;
	brand?: Brand;
	color?: CarColor;
	steering?: Steering;
}

export interface GetCarParams {
	carId: string;
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
		getCar: builder.query<CarResponse, GetCarParams>({
			query: ({ carId }) => `/cars/info/${carId}`,
		}),
	}),
});

export const { useGetCarsQuery, useGetCarQuery } = carsApi;
