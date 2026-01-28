import { Button } from "@/shared/components";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import { FilterField } from "../FilterField/FilterField";
import {
	steeringOptions,
	transmissionOptions,
} from "../SegmentControls/consts/consts";
import { SegmentControls } from "../SegmentControls/SegmentControls";
import { bodyTypeOptions, brandOptions } from "../Select/consts/consts";
import { Select } from "../Select/Select";
import { Slider } from "../Slider/Slider";
import styles from "./CarFilters.module.css";
import { useCarFilters } from "./hooks/useCarFilters";

interface CarFiltersProps {
	onClose: () => void;
}

export const CarFilters = ({ onClose }: CarFiltersProps) => {
	const { state, actions } = useCarFilters();
	const { transmission, steering, brand, bodyType, color } = state;
	const { updateParam, resetFilters } = actions;

	return (
		<section className={styles.filters}>
			<div className={styles.wrapper}>
				<FilterField label="Марка">
					<Select
						options={brandOptions}
						value={brand}
						onChange={(value) => updateParam("brand", value)}
					/>
				</FilterField>

				<FilterField label="Тип кузова">
					<Select
						options={bodyTypeOptions}
						value={bodyType}
						onChange={(value) => updateParam("bodyType", value)}
					/>
				</FilterField>
			</div>

			<div className={styles.wrapper}>
				<FilterField label="Руль">
					<SegmentControls
						options={steeringOptions}
						value={steering}
						onChange={(value) => updateParam("steering", value)}
					/>
				</FilterField>

				<FilterField label="Коробка передач">
					<SegmentControls
						options={transmissionOptions}
						value={transmission}
						onChange={(value) => updateParam("transmission", value)}
					/>
				</FilterField>
			</div>

			<div className={styles.wrapper}>
				<FilterField label="Стоимость">
					<Slider />
				</FilterField>

				<FilterField label="Цвет">
					<ColorPicker
						value={color}
						onChange={(value) => updateParam("color", value)}
					/>
				</FilterField>
			</div>

			<div className={styles.wrapper}>
				<Button
					variant="outline"
					onClick={() => {
						resetFilters();
						onClose();
					}}
				>
					Сбросить все фильтры
				</Button>

				<Button variant="primary" onClick={onClose}>
					Показать
				</Button>
			</div>
		</section>
	);
};
