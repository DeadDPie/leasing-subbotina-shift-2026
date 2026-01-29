import { RENT_STAGES } from "./constants/rentStages";
import { RentProvider, useRent } from "./contexts/RentContext";
import styles from "./RentPage.module.css";

const RentStageForm = () => {
	const { stage } = useRent();
	const StageComponent = RENT_STAGES[stage];
	return <StageComponent />;
};

export default function RentPage() {
	return (
		<div className={styles.page}>
			<RentProvider>
				<RentStageForm />
			</RentProvider>
		</div>
	);
}
