import classNames from "classnames";
import styles from "./Typography.module.css";

type TypographyVariant =
	| "body16"
	| "title20"
	| "body16Medium"
	| "body16Ghost"
	| "label";

type TypographyTag =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "p"
	| "span"
	| "div"
	| "dd"
	| "dt";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
	variant?: TypographyVariant;
	as?: TypographyTag;
}

const variantClasses: Record<TypographyVariant, string> = {
	body16: styles.typography_body16,
	body16Medium: styles.typography_body16_medium,
	title20: styles.typography_title20,
	body16Ghost: styles.typography_body16_ghost,
	label: styles.typography_label,
};

export const Typography = ({
	variant = "body16",
	as: Component = "p",
	children,
	className,
	...props
}: TypographyProps) => (
	<Component
		className={classNames(
			styles.typography,
			variantClasses[variant],
			className,
		)}
		{...props}
	>
		{children}
	</Component>
);
