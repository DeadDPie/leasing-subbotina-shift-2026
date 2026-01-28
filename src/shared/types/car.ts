export interface CarMedia {
	url: string;
	isCover: boolean;
}

export type Transmission = "automatic" | "manual";
export type BodyType = "sedan" | "suv" | "coupe" | "hatchback" | "cabriolet";
export type Steering = "left" | "right";
export type CarColor =
	| "black"
	| "white"
	| "red"
	| "silver"
	| "blue"
	| "grey"
	| "orange";
export type Brand =
	| "Haval"
	| "Hyundai"
	| "Volkswagen"
	| "Kia"
	| "Geely"
	| "Any";

export interface BaseCar {
	id: string;
	name: string;
	brand: string;
	media: CarMedia[];
	transmission: Transmission;
	price: number;
	location: string;
	color: CarColor;
	bodyType: BodyType;
	steering: Steering;
}

export interface CarRent {
	startDate: number;
	endDate: number;
}

export interface CarWithRents extends BaseCar {
	rents: CarRent[];
}

export interface CarResponse {
	success: boolean;
	reason?: string;
	data: CarWithRents;
}

export interface CarsResponse {
	success: boolean;
	data: BaseCar[];
	meta: {
		total: number;
		page: number;
		limit: number;
		totalPages: number;
	};
}
