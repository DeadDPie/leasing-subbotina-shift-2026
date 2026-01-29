import { Button } from "@/shared/components";
import { useRent } from "../../contexts/RentContext";

export const RentConditionsForm = () => {
	const { nextStage } = useRent();

	return (
		<div>
			<h2>Условия аренды</h2>
			<Button onClick={nextStage}>Далее</Button>
		</div>
	);
};
