import "react-datepicker/dist/react-datepicker.css";

import { ru } from "date-fns/locale/ru";
import { useEffect, useState } from "react";
import { registerLocale } from "react-datepicker";
import { useSearchParams } from "react-router-dom";
import {
	Button,
	DateRangePicker,
	SlidersIcon,
	Typography,
} from "@/shared/components";
import styles from "./SearchPanel.module.css";

registerLocale("ru", ru);

export const SearchPanel = ({
	onFiltersClick,
}: {
	onFiltersClick: () => void;
}) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [search, setSearch] = useState(searchParams.get("search") || "");

	useEffect(() => {
		if (search) {
			searchParams.set("search", search);
		} else {
			searchParams.delete("search");
		}
		setSearchParams(searchParams);
	}, [search, searchParams, setSearchParams]);

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

			<DateRangePicker />

			<Button variant="secondary" onClick={onFiltersClick}>
				<SlidersIcon /> Фильтры
			</Button>
		</section>
	);
};
