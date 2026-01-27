import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Slider.module.css";

const MIN = 0;
const MAX = 10000;

export const Slider = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [price, setPrice] = useState(() => {
		const param = searchParams.get("maxPrice");
		return param ? Number(param) : 3000;
	});

	const progress = ((price - MIN) / (MAX - MIN)) * 100;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(event.target.value);
		setPrice(value);

		const newParams = new URLSearchParams(searchParams);
		newParams.set("maxPrice", String(value));
		setSearchParams(newParams);
	};

	return (
		<div className={styles.container}>
			<input
				type="range"
				min={MIN}
				max={MAX}
				value={price}
				onChange={handleChange}
				className={styles.slider}
				style={{ "--progress-width": `${progress}%` } as React.CSSProperties}
			/>
			<div className={styles.limits}>
				<span>{price.toLocaleString()} ₽</span>
				<span>до {MAX.toLocaleString()} ₽</span>
			</div>
		</div>
	);
};
