import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { type GetCarsParams, useGetCarsQuery } from "@/shared/api/carsApi";
import { ErrorMessage, Loading } from "@/shared/components";
import type {
	BodyType,
	Brand,
	CarColor,
	Steering,
	Transmission,
} from "@/shared/types/car";
import { getErrorMessage } from "../../shared/helpers/getErrorMessage";
import { CarCard } from "./components/CarCard/CarCard";
import { CarFilters } from "./components/CarFilters/CarFilters";
import { SearchPanel } from "./components/SearchPanel/SearchPanel";
import styles from "./MainPage.module.css";

export default function MainPage() {
	const [filtersOpen, setFiltersOpen] = useState(false);
	const [searchParams] = useSearchParams();

	const query: GetCarsParams = {
		search: searchParams.get("search") ?? undefined,
		maxPrice: searchParams.get("maxPrice")
			? Number(searchParams.get("maxPrice"))
			: undefined,
		minPrice: searchParams.get("minPrice")
			? Number(searchParams.get("minPrice"))
			: undefined,
		transmission:
			(searchParams.get("transmission") as Transmission) || undefined,
		steering: (searchParams.get("steering") as Steering) || undefined,
		bodyType: (searchParams.get("bodyType") as BodyType) || undefined,
		brand: (searchParams.get("brand") as Brand) || undefined,
		color: (searchParams.get("color") as CarColor) || undefined,
	};

	const getCarsQuery = useGetCarsQuery(query);

	if (getCarsQuery.isLoading) return <Loading />;

	if (getCarsQuery.error)
		return <ErrorMessage message={getErrorMessage(getCarsQuery.error)} />;

	return (
		<>
			<SearchPanel onFiltersClick={() => setFiltersOpen((prev) => !prev)} />

			{filtersOpen && <CarFilters onClose={() => setFiltersOpen(false)} />}

			<section className={styles.cards_list}>
				{getCarsQuery.data?.data.map((car) => (
					<CarCard key={car.id} car={car} />
				))}
			</section>
		</>
	);
}
