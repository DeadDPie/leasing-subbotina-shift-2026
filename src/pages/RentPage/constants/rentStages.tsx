import { ConfirmationStep } from "../components/ConfirmationStep/ConfirmationStep";
import { Overview } from "../components/Overview/Overview";
import { RentConditionsForm } from "../components/RentConditionsForm/RentConditionsForm";
import { UserDetailsForm } from "../components/UserDetailsForm/UserDetailsForm";

export const RENT_STAGES = {
	conditions: RentConditionsForm,
	details: UserDetailsForm,
	confirmation: ConfirmationStep,
	overview: Overview,
};

export type RentStageKey = keyof typeof RENT_STAGES;
