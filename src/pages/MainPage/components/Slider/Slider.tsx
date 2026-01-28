import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Slider.module.css";

const MIN_PRICE = 0;
const MAX_PRICE = 10000;

export const Slider = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [minPrice, setMinPrice] = useState(() => {
		const value = searchParams.get("minPrice");
		return value ? Number(value) : MIN_PRICE;
	});

	const [maxPrice, setMaxPrice] = useState(() => {
		const value = searchParams.get("maxPrice");
		return value ? Number(value) : MAX_PRICE;
	});

	const updateParams = (min: number, max: number) => {
		const params = new URLSearchParams(searchParams);

		min === MIN_PRICE
			? params.delete("minPrice")
			: params.set("minPrice", String(min));
		max === MAX_PRICE
			? params.delete("maxPrice")
			: params.set("maxPrice", String(max));

		setSearchParams(params);
	};

	const handleMinChange = (value: number) => {
		const newMin = Math.min(value, maxPrice - 1);
		setMinPrice(newMin);
		updateParams(newMin, maxPrice);
	};

	const handleMaxChange = (value: number) => {
		const newMax = Math.max(value, minPrice + 1);
		setMaxPrice(newMax);
		updateParams(minPrice, newMax);
	};

	const progressLeft = ((minPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
	const progressWidth = ((maxPrice - minPrice) / (MAX_PRICE - MIN_PRICE)) * 100;

	return (
		<div className={styles.container}>
			<div className={styles.range}>
				<div className={styles.track} />

				<div
					className={styles.progress}
					style={{
						left: `${progressLeft}%`,
						width: `${progressWidth}%`,
					}}
				/>

				<input
					type="range"
					min={MIN_PRICE}
					max={MAX_PRICE}
					value={minPrice}
					onChange={(e) => handleMinChange(Number(e.target.value))}
					className={`${styles.slider} ${styles.thumbLeft}`}
				/>

				<input
					type="range"
					min={MIN_PRICE}
					max={MAX_PRICE}
					value={maxPrice}
					onChange={(e) => handleMaxChange(Number(e.target.value))}
					className={`${styles.slider} ${styles.thumbRight}`}
				/>
			</div>

			<div className={styles.limits}>
				<span>от {minPrice} ₽</span>
				<span>до {maxPrice} ₽</span>
			</div>
		</div>
	);
};
