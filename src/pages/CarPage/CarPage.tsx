import { skipToken } from "@reduxjs/toolkit/query";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCarQuery } from "@/shared/api/carsApi";
import { Button, ErrorMessage, Loading, Typography } from "@/shared/components";
import { AppRoutes, ROUTES } from "@/shared/constants/router";
import { getLabelFromOptions } from "@/shared/helpers/getLabelFromOptions";
import type { CarWithRents } from "@/shared/types/car";
import { getErrorMessage } from "../../shared/helpers/getErrorMessage";
import {
	steeringOptions,
	transmissionOptions,
} from "../MainPage/components/SegmentControls/consts/consts";
import styles from "./CarPage.module.css";
import { CarGallery } from "./components/CarGallery";

export default function CarPage() {
	const navigate = useNavigate();

	const { carId } = useParams<{ carId: string }>();

	const getCarQuery = useGetCarQuery(carId ? { carId } : skipToken);
	const car = getCarQuery.data?.data as CarWithRents;

	if (getCarQuery.isLoading) return <Loading />;

	if (getCarQuery.error)
		return <ErrorMessage message={getErrorMessage(getCarQuery.error)} />;

	if (!car) return null;

	const transmissionLabel = getLabelFromOptions(
		transmissionOptions,
		car.transmission,
	);

	const steeringLabel = getLabelFromOptions(steeringOptions, car.steering);

	return (
		<div className={styles.page}>
			<div className={styles.wrapper}>
				<CarGallery media={car.media} />
				<section className={styles.information}>
					<Typography as="h1" className={styles.title}>
						{car.name}
					</Typography>

					<section className={styles.block}>
						<Typography as="h2" variant="title20">
							Характеристики
						</Typography>

						<dl className={styles.list}>
							<div className={styles.row}>
								<Typography as="dt" variant="body16Medium">
									Коробка передач
								</Typography>
								<Typography as="dd" variant="body16">
									{transmissionLabel}
								</Typography>
							</div>

							<div className={styles.row}>
								<Typography as="dt" variant="body16Medium">
									Руль
								</Typography>
								<Typography as="dd" variant="body16">
									{steeringLabel}
								</Typography>
							</div>

							<div className={styles.row}>
								<Typography as="dt" variant="body16Medium">
									Тип кузова
								</Typography>
								<Typography as="dd" variant="body16">
									{car.bodyType}
								</Typography>
							</div>

							<div className={styles.row}>
								<Typography as="dt" variant="body16Medium">
									Цвет
								</Typography>
								<Typography as="dd" variant="body16">
									{car.color}
								</Typography>
							</div>
						</dl>
					</section>

					<section className={styles.block}>
						<Typography as="h2" variant="title20">
							Стоимость
						</Typography>

						<dl className={styles.list}>
							<div className={styles.row}>
								<Typography as="dt" variant="body16Medium">
									Аренда на 7 дней
								</Typography>
								<Typography as="dd" variant="body16">
									{car.rents[0]?.startDate} – {car.rents[0]?.endDate}
								</Typography>
							</div>
						</dl>
					</section>

					<section className={styles.row}>
						<Typography as="h2" variant="title20">
							Итого
						</Typography>
						<Typography variant="title20">{car.price} ₽</Typography>
					</section>

					<dl className={styles.wrapper}>
						<Button variant="outline">Назад</Button>

						<Button
							variant="primary"
							onClick={() => navigate(ROUTES[AppRoutes.RENT].to(carId))}
						>
							Забронировать
						</Button>
					</dl>
				</section>
			</div>
		</div>
	);
}
