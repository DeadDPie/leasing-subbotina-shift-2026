import styles from "./ColorPicker.module.css";
import type { CarColor } from "./consts/consts";
import { COLOR_MAP } from "./consts/consts";

interface ColorPickerProps {
	value: CarColor | null;
	onChange: (value: CarColor | null) => void;
}

export const ColorPicker = ({ value, onChange }: ColorPickerProps) => {
	return (
		<div className={styles.picker}>
			{Object.entries(COLOR_MAP).map(([color, hex]) => {
				const typedColor = color as CarColor;

				return (
					<label key={color} className={styles.item}>
						<input
							type="radio"
							name="color"
							value={typedColor}
							checked={value === typedColor}
							onChange={() => onChange(typedColor)}
						/>
						<span
							className={styles.circle}
							style={{ "--color": hex } as React.CSSProperties}
							data-active={value === typedColor}
						/>
					</label>
				);
			})}
		</div>
	);
};
