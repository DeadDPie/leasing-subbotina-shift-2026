import classNames from "classnames";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "ghost" | "outline" | "secondary";

interface ButtonProps extends React.ComponentProps<"button"> {
	variant?: ButtonVariant;
}

export const Button = ({
	variant = "primary",
	children,
	className,
	...props
}: ButtonProps) => (
	<button
		type="button"
		className={classNames(styles.button, styles[variant], className)}
		{...props}
	>
		{children}
	</button>
);
