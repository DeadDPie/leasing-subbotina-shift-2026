import type { components, paths } from "../api";

export type Car = components["schemas"]["Car"];
export type CarWithRents = components["schemas"]["CarWithRents"];
export type Media = components["schemas"]["Media"];
export type PaginationMeta = components["schemas"]["PaginationMeta"];
export type BookedDateRange = components["schemas"]["BookedDateRange"];

export type Brand = Car["brand"];
export type Transmission = Car["transmission"];
export type CarColor = Car["color"];
export type BodyType = Car["bodyType"];
export type Steering = Car["steering"];

export type CarsPaginatedResponse =
	components["schemas"]["CarsPaginatedResponse"];
export type CarResponse = components["schemas"]["CarResponse"];
export type CarRentResponse = components["schemas"]["CarRentResponse"];
export type CarRentsResponse = components["schemas"]["CarRentsResponse"];

export type CreateRentDto = components["schemas"]["CreateRentDto"];
export type CancelCarRentDto = components["schemas"]["CancelCarRentDto"];

export type CarRent = components["schemas"]["CarRent"];
export type CarRentStatus = CarRent["status"];

export type GetCarsParams =
	paths["/api/cars/info"]["get"]["parameters"]["query"];

export type GetCarParams = {
	carId: string;
};

export type GetCarRentsParams =
	paths["/api/cars/rent"]["get"]["parameters"]["query"];

export type GetCarRentParams = {
	carRentId: string;
};
