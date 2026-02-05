export enum BodyType {
	Sedan = "sedan",
	Suv = "suv",
	Coupe = "coupe",
	Hatchback = "hatchback",
	Cabriolet = "cabriolet",
	Any = "Any",
}

export enum Brand {
	Haval = "Haval",
	Hyundai = "Hyundai",
	Volkswagen = "Volkswagen",
	Kia = "Kia",
	Geely = "Geely",
	Any = "Any",
}

export const bodyTypeOptions = [
	{ value: BodyType.Sedan, label: "Седан" },
	{ value: BodyType.Suv, label: "SUV" },
	{ value: BodyType.Coupe, label: "Купе" },
	{ value: BodyType.Hatchback, label: "Хэтчбек" },
	{ value: BodyType.Cabriolet, label: "Кабриолет" },
] as const;

export const brandOptions = [
	{ value: Brand.Haval, label: "Haval" },
	{ value: Brand.Hyundai, label: "Hyundai" },
	{ value: Brand.Volkswagen, label: "Volkswagen" },
	{ value: Brand.Kia, label: "Kia" },
	{ value: Brand.Geely, label: "Geely" },
] as const;
