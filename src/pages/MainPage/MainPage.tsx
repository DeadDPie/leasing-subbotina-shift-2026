import { useGetCarsQuery } from "@/shared/api/carsApi";
import { ErrorMessage, Header, Loading } from "@/shared/components";
import { CarCard } from "./components/CarCard/CarCard";
import styles from "./MainPage.module.css";

export default function MainPage() {
	const getCarsQuery = useGetCarsQuery();

	if (getCarsQuery.isLoading) return <Loading />;

	if (getCarsQuery.error) {
		const message =
			"data" in (getCarsQuery.error as any) &&
			(getCarsQuery.error as any).data?.message
				? (getCarsQuery.error as any).data.message
				: "Произошла ошибка";

		return <ErrorMessage message={message} />;
	}

	return (
		<>
			<Header />
			<main>
				<section className={styles.cards_list}>
					{getCarsQuery.data?.data.map((car) => (
						<CarCard key={car.id} car={car} />
					))}
				</section>
			</main>
		</>
	);
}
