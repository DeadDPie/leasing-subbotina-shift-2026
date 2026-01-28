import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetCarsQuery } from "@/shared/api/carsApi";
import { ErrorMessage, Header, Loading } from "@/shared/components";
import { CarCard } from "./components/CarCard/CarCard";
import { CarFilters } from "./components/CarFilters/CarFilters";
import { SearchPanel } from "./components/SearchPanel/SearchPanel";
import { getErrorMessage } from "./consts/getErrorMessage";
import styles from "./MainPage.module.css";

export default function MainPage() {
	const [filtersOpen, setFiltersOpen] = useState(false);
	const [searchParams] = useSearchParams();

	const query = {
		search: searchParams.get("search") || undefined,
		maxPrice: searchParams.get("maxPrice") || undefined,
		minPrice: searchParams.get("minPrice") || undefined,
		transmission: searchParams.get("transmission") || undefined,
		steering: searchParams.get("steering") || undefined,
		bodyType: searchParams.get("bodyType") || undefined,
		brand: searchParams.get("brand") || undefined,
		color: searchParams.get("color") || undefined,
	};

	const getCarsQuery = useGetCarsQuery(query);

	if (getCarsQuery.isLoading) return <Loading />;

	if (getCarsQuery.error)
		return <ErrorMessage message={getErrorMessage(getCarsQuery.error)} />;

	return (
		<>
			<Header />
			<main>
				<SearchPanel onFiltersClick={() => setFiltersOpen((prev) => !prev)} />

				{filtersOpen && <CarFilters onClose={() => setFiltersOpen(false)} />}

				<section className={styles.cards_list}>
					{getCarsQuery.data?.data.map((car) => (
						<CarCard key={car.id} car={car} />
					))}
				</section>
			</main>
		</>
	);
}
