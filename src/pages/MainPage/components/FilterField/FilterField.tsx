import { Typography } from "@/shared/components";

type FilterFieldProps = {
	label: string;
	children: React.ReactNode;
};

export const FilterField = ({ label, children }: FilterFieldProps) => (
	<div>
		<Typography variant="label">{label}</Typography>
		{children}
	</div>
);
