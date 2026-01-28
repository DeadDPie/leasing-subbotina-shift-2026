import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
	message?: string;
}

export const ErrorMessage = ({
	message = "Произошла ошибка",
}: ErrorMessageProps) => {
	return <div className={styles.error}>{message}</div>;
};
