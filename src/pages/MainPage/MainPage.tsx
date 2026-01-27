import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetCarsQuery } from "@/shared/api/carsApi";
import { ErrorMessage, Header, Loading } from "@/shared/components";
import { CarCard } from "./components/CarCard/CarCard";
import styles from "./MainPage.module.css";
import { CarFilters } from "./components/CarFilters/CarFilters";
import { SearchPanel } from "./components/SearchPanel/SearchPanel";

export default function MainPage() {
	const [filtersOpen, setFiltersOpen] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const query = {
		search: searchParams.get("search") || undefined,
	};
	const { data, isLoading, error } = useGetCarsQuery(query);

	if (isLoading) return <Loading />;
	if (error) {
		const message =
			"data" in (error as any) && (error as any).data?.message
				? (error as any).data.message
				: "Произошла ошибка";

		return <ErrorMessage message={message} />;
	}

	return (
		<>
			<Header />
			<main>
				<SearchPanel
					onFiltersClick={() => setFiltersOpen(true)}
					search={query.search || ""}
					onSearchChange={(value) => {
						searchParams.set("search", value);
						setSearchParams(searchParams);
					}}
				/>
				{filtersOpen && <CarFilters onClose={() => setFiltersOpen(false)} />}
				<section className={styles.cards_list}>
					{data?.data.map((car) => (
						<CarCard key={car.id} car={car} />
					))}
				</section>
			</main>
		</>
	);
}
