import classNames from "classnames";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "ghost" | "outline" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	children,
	className,
	...props
}) => {
	return (
		<button
			type="button"
			className={classNames(styles.button, styles[variant], className)}
			{...props}
		>
			{children}
		</button>
	);
};
