import { useGetCarsQuery } from "@/shared/api/carsApi";
import { ErrorMessage, Header, Loading } from "@/shared/components";
import { CarCard } from "./components/CarCard/CarCard";
import styles from "./MainPage.module.css";

export default function MainPage() {
	const { data, isLoading, error } = useGetCarsQuery();

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
				<section className={styles.cards_list}>
					{data?.data.map((car) => (
						<CarCard key={car.id} car={car} />
					))}
				</section>
			</main>
		</>
	);
}
