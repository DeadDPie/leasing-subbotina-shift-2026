import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "react-router-dom";
import { useGetCarQuery } from "@/shared/api/carsApi";
import { ErrorMessage, Loading } from "@/shared/components";
import { getErrorMessage } from "../MainPage/consts/getErrorMessage";

export default function CarPage() {
	const { carId } = useParams<{ carId: string }>();

	const getCarsQuery = useGetCarQuery(carId ? { carId } : skipToken);

	if (getCarsQuery.isLoading) return <Loading />;

	if (getCarsQuery.error)
		return <ErrorMessage message={getErrorMessage(getCarsQuery.error)} />;

	return <>CarPage</>;
}
