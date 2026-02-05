import styles from "./Select.module.css";

type SelectOption<T extends string> = {
	value: T;
	label: string;
};

type SelectControlsProps<T extends string> = {
	options: readonly SelectOption<T>[];
	value: T;
	onChange: (value: T) => void;
};

export const Select = <T extends string>({
	options,
	value,
	onChange,
}: SelectControlsProps<T>) => {
	return (
		<select
			id="search_input"
			name="search_input"
			className={styles.input}
			value={value}
			onChange={(e) => onChange(e.target.value as T)}
		>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};
