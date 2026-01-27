export interface CarMedia {
	url: string;
	isCover: boolean;
}

export type Transmission = "automatic" | "manual";
export type BodyType = "sedan" | "suv" | "coupe" | "hatchback" | "cabriolet";
export type Steering = "left" | "right";

export interface Car {
	id: string;
	name: string;
	brand: string;
	media: CarMedia[];
	transmission: Transmission;
	price: number;
	location: string;
	color: string;
	bodyType: BodyType;
	steering: Steering;
}

export interface CarsResponse {
	success: boolean;
	data: Car[];
	meta: {
		total: number;
		page: number;
		limit: number;
		totalPages: number;
	};
}
