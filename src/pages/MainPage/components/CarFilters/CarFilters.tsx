import { Button } from "@/shared/components";
import { FilterField } from "../FilterField/FilterField";
import { Slider } from "../Slider/Slider";
import styles from "./CarFilters.module.css";

interface CarFiltersProps {
	onClose: () => void;
}

export const CarFilters = ({ onClose }: CarFiltersProps) => {
	const handleResetFilters = () => {
		onClose();
	};

	return (
		<section className={styles.filters}>
			<div className={styles.wrapper}>
				<FilterField label="Стоимость">
					<Slider />
				</FilterField>
			</div>
			<div className={styles.wrapper}>
				<Button variant="outline" onClick={handleResetFilters}>
					Сбросить все фильтры
				</Button>
				<Button variant="primary">Показать</Button>
			</div>
		</section>
	);
};
