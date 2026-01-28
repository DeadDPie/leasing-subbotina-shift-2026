import styles from "./SegmentControls.module.css";

type SegmentOption<T extends string> = {
	value: T;
	label: string;
};

type SegmentControlsProps<T extends string> = {
	options: readonly SegmentOption<T>[];
	value: T;
	onChange: (value: T) => void;
};

export const SegmentControls = <T extends string>({
	options,
	value,
	onChange,
}: SegmentControlsProps<T>) => (
	<div className={styles.controls}>
		{options.map((option) => (
			<button
				key={option.value}
				className={`${styles.segment} ${
					value === option.value ? styles.chosen : ""
				}`}
				onClick={() => onChange(option.value)}
			>
				{option.label}
			</button>
		))}
	</div>
);
