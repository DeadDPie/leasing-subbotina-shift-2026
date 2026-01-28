export enum CarColor {
	Black = "black",
	White = "white",
	Red = "red",
	Silver = "silver",
	Blue = "blue",
	Grey = "grey",
	Orange = "orange",
}

export const COLOR_MAP: Record<CarColor, string> = {
	[CarColor.Black]: "#111111",
	[CarColor.White]: "#ffffff",
	[CarColor.Blue]: "#2f5bff",
	[CarColor.Grey]: "#808080",
	[CarColor.Silver]: "#c0c0c0",
	[CarColor.Orange]: "#ff8c00",
	[CarColor.Red]: "#d7261e",
};
