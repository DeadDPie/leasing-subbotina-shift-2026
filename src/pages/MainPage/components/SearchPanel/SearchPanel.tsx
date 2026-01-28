import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ru } from "date-fns/locale/ru";
import { useEffect, useState } from "react";
import { registerLocale } from "react-datepicker";
import { useSearchParams } from "react-router-dom";
import { Button, SlidersIcon, Typography } from "@/shared/components";
import styles from "./SearchPanel.module.css";

registerLocale("ru", ru);

export const SearchPanel = ({
	onFiltersClick,
}: {
	onFiltersClick: () => void;
}) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [search, setSearch] = useState(searchParams.get("search") || "");
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [endDate, setEndDate] = useState<Date | null>(null);

	useEffect(() => {
		if (search) {
			searchParams.set("search", search);
		} else {
			searchParams.delete("search");
		}
		setSearchParams(searchParams);
	}, [search, searchParams, setSearchParams]);

	const handleDateChange = ([start, end]: [Date | null, Date | null]) => {
		setStartDate(start);
		setEndDate(end);
	};

	return (
		<section className={styles.panel}>
			<div className={styles.wrapper}>
				<label htmlFor="search_input">
					<Typography variant="label">Поиск</Typography>
				</label>
				<input
					id="search_input"
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Поиск"
					className={styles.input}
				/>
			</div>

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
					dayClassName={() => styles.day}
				/>
			</div>

			<Button variant="secondary" onClick={onFiltersClick}>
				<SlidersIcon /> Фильтры
			</Button>
		</section>
	);
};
