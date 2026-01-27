import styles from "./ErrorMessage.module.css";

interface ErrorProps {
	message?: string;
}

export const ErrorMessage = ({ message = "Произошла ошибка" }: ErrorProps) => {
	return <div className={styles.error}>{message}</div>;
};
