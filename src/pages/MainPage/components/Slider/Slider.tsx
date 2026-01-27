import { useState } from "react";
import styles from "./Slider.module.css";

const MIN = 0;
const MAX = 10000;

export const Slider = () => {
	const [price, setPrice] = useState(3000);

	const progress = ((price - MIN) / (MAX - MIN)) * 100;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPrice(Number(event.target.value));
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
