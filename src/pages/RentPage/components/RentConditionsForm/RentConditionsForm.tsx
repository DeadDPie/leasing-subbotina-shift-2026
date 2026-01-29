import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FilterField } from "@/pages/MainPage/components/FilterField/FilterField";
import { Button, DateRangePicker } from "@/shared/components";
import { useRent } from "../../contexts/RentContext";
import styles from "./RentConditionsForm.module.css";

export const RentConditionsForm = () => {
	const { nextStage, updateFormData } = useRent();
	const navigate = useNavigate();

	const { carId } = useParams<{ carId: string }>();
	const [pickupLocation, setPickupLocation] = useState("");
	const [returnLocation, setReturnLocation] = useState("");

	const handleNext = () => {
		updateFormData("pickupLocation", pickupLocation);
		updateFormData("returnLocation", returnLocation);

		nextStage();
	};
	return (
		<div className={styles.form}>
			<h2>Бронирование авто</h2>
			<FilterField label="Место получения">
				<DateRangePicker
					onChange={(start, end) => {
						if (start) updateFormData("startDate", start.getTime());
						if (end) updateFormData("endDate", end.getTime());
					}}
				/>
			</FilterField>
			<FilterField label="Место получения">
				<input
					id="pickupLocation"
					type="text"
					value={pickupLocation}
					onChange={(e) => setPickupLocation(e.target.value)}
					placeholder="Место получения"
					className={styles.input}
				/>
			</FilterField>
			<FilterField label="Место возврата">
				<input
					id="returnLocation"
					type="text"
					value={returnLocation}
					onChange={(e) => setReturnLocation(e.target.value)}
					placeholder="Место возврата"
					className={styles.input}
				/>
			</FilterField>
			<div className={styles.wrapper}>
				<Button variant="outline" onClick={() => navigate(`/car/${carId}`)}>
					Назад
				</Button>

				<Button onClick={handleNext}>Далее</Button>
			</div>
		</div>
	);
};
