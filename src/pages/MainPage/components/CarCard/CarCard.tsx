import { Button, Typography } from "@shared/components";
import { API_URL } from "@shared/constants/url";
import type { Car } from "@shared/types/car";
import { useNavigate } from "react-router-dom";
import styles from "./CarCard.module.css";

interface CarCardProps {
	car: Car;
}
const DEFAULT_DAYS_RENT = 14;

export const CarCard = ({ car }: CarCardProps) => {
	const navigate = useNavigate();

	const cover = car.media.find((m) => m.isCover);
	const defaultSrc = cover ? `${API_URL}${cover.url}` : "/placeholder-car.png";

	return (
		<article className={styles.card}>
			{cover && (
				<img className={styles.image} src={defaultSrc} alt={car.name} />
			)}
			<Typography variant="title20">{car.name}</Typography>

			<Typography variant="body16Ghost">
				{car.transmission === "automatic" ? "Автомат" : "Механика"},
				{car.bodyType}
			</Typography>
			<div className={styles.wrapper}>
				<Typography variant="title20">{car.price} ₽</Typography>

				<Typography variant="body16Ghost">
					{car.price * DEFAULT_DAYS_RENT} ₽ за {DEFAULT_DAYS_RENT} дней
				</Typography>
			</div>
			<Button variant="primary" onClick={() => navigate(`/car/${car.id}`)}>
				Выбрать
			</Button>
		</article>
	);
};
