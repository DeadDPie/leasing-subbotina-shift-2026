export enum Transmission {
	Any = "any",
	Auto = "automatic",
	Manual = "manual",
}

export const transmissionOptions = [
	{ value: Transmission.Any, label: "Любая" },
	{ value: Transmission.Auto, label: "Автомат" },
	{ value: Transmission.Manual, label: "Механика" },
] as const;

export enum Steering {
	Any = "any",
	Left = "left",
	Right = "right",
}

export const steeringOptions = [
	{ value: Steering.Any, label: "Любой" },
	{ value: Steering.Left, label: "Левый" },
	{ value: Steering.Right, label: "Правый" },
] as const;
