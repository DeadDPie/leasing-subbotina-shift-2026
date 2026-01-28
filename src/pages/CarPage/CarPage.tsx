import { useParams } from "react-router-dom";

export default function CarPage() {
	const { carId } = useParams<{ carId: string }>();
	return <>CarPage {carId}</>;
}
