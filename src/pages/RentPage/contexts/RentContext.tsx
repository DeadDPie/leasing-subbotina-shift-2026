import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import {
	RENT_STAGES,
	type RentStageKey,
} from "@/pages/RentPage/constants/rentStages";

export interface RentFormData {
	birthDate: string;
	carId: string;
	email: string;
	endDate: number;
	firstName: string;
	lastName: string;
	middleName?: string;
	phone: string;
	pickupLocation: string;
	returnLocation: string;
	startDate: number;
	comment?: string;
}

interface RentContextValue {
	stage: RentStageKey;
	data: Partial<RentFormData>;
	updateFormData: <K extends keyof RentFormData>(
		field: K,
		value: RentFormData[K],
	) => void;
	nextStage: () => void;
	prevStage: () => void;
}

const RentContext = createContext<RentContextValue | null>(null);

export const RentProvider = ({ children }: { children: React.ReactNode }) => {
	const [stage, setStage] = useState<RentStageKey>("conditions");
	const [data, setData] = useState<Partial<RentFormData>>({});

	const updateFormData = useCallback(
		<K extends keyof RentFormData>(field: K, value: RentFormData[K]) => {
			setData((prev) => {
				if (prev[field] === value) return prev;
				return { ...prev, [field]: value };
			});
		},
		[],
	);

	const stages = useMemo(() => Object.keys(RENT_STAGES) as RentStageKey[], []);
	const currentIndex = stages.indexOf(stage);

	const nextStage = useCallback(() => {
		if (currentIndex < stages.length - 1) setStage(stages[currentIndex + 1]);
	}, [currentIndex, stages]);

	const prevStage = useCallback(() => {
		if (currentIndex > 0) setStage(stages[currentIndex - 1]);
	}, [currentIndex, stages]);

	const value = useMemo(
		() => ({
			stage,
			data,
			updateFormData,
			nextStage,
			prevStage,
		}),
		[stage, data, updateFormData, nextStage, prevStage],
	);

	return <RentContext.Provider value={value}>{children}</RentContext.Provider>;
};

export const useRent = () => {
	const context = useContext(RentContext);
	if (!context) throw new Error("useRent must be used within a RentProvider");
	return context;
};
