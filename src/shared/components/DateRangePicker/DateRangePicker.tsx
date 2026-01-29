import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale/ru";
import { useState } from "react";
import { registerLocale } from "react-datepicker";
import styles from "./DateRangePicker.module.css";

registerLocale("ru", ru);

interface DateRangePickerProps {
	onChange?: (start: Date | null, end: Date | null) => void;
}

export const DateRangePicker = ({ onChange }: DateRangePickerProps) => {
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [endDate, setEndDate] = useState<Date | null>(null);

	const handleDateChange = ([start, end]: [Date | null, Date | null]) => {
		setStartDate(start);
		setEndDate(end);
		onChange?.(start, end);
	};

	return (
		<div className={styles.datepickerWrapper}>
			<DatePicker
				selectsRange
				locale="ru"
				startDate={startDate}
				endDate={endDate}
				onChange={handleDateChange}
				dateFormat="dd.MM.yyyy"
				placeholderText="Дата аренды"
				className={styles.input}
				calendarClassName={styles.calendar}
			/>
		</div>
	);
};
