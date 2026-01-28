import { useSearchParams } from "react-router-dom";
import type { CarColor } from "../../ColorPicker/consts/consts";
import { Steering, Transmission } from "../../SegmentControls/consts/consts";
import { BodyType, Brand } from "../../Select/consts/consts";

export const useCarFilters = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const transmission =
		(searchParams.get("transmission") as Transmission) || Transmission.Any;
	const steering = (searchParams.get("steering") as Steering) || Steering.Any;
	const brand = (searchParams.get("brand") as Brand) || Brand.Any;
	const bodyType = (searchParams.get("bodyType") as BodyType) || BodyType.Any;
	const color = searchParams.get("color") as CarColor | null;

	const updateParam = (key: string, value?: string | null) => {
		const params = new URLSearchParams(searchParams);

		if (!value || value === "any") {
			params.delete(key);
		} else {
			params.set(key, value);
		}

		setSearchParams(params);
	};
	const resetFilters = () => {
		const params = new URLSearchParams(searchParams);

		for (const key of [
			"transmission",
			"steering",
			"brand",
			"bodyType",
			"minPrice",
			"maxPrice",
			"color",
		]) {
			params.delete(key);
		}

		setSearchParams(params);
	};

	return {
		state: {
			transmission,
			steering,
			brand,
			bodyType,
			color,
		},
		actions: {
			updateParam,
			resetFilters,
		},
	};
};
