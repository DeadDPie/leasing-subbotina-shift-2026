import { useState } from "react";
import { Button } from "@/shared/components";
import { useRent } from "../../contexts/RentContext";
import styles from "./UserDetailsForm.module.css";

export const UserDetailsForm = () => {
	const { data, updateFormData } = useRent();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [comment, setComment] = useState("");

	const handleSubmit = () => {
		updateFormData("firstName", firstName);
		updateFormData("lastName", lastName);
		updateFormData("middleName", middleName);
		updateFormData("birthDate", birthDate); // ISO
		updateFormData("email", email);
		updateFormData("phone", phone);
		updateFormData("comment", comment);

		console.log("Финальные данные заказа:", {
			...data,
			firstName,
			lastName,
			middleName,
			birthDate,
			email,
			phone,
			comment,
		});
	};

	return (
		<div className={styles.form}>
			<h2>Данные арендатора</h2>

			<input
				className={styles.input}
				placeholder="Имя"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>

			<input
				className={styles.input}
				placeholder="Фамилия"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>

			<input
				className={styles.input}
				placeholder="Отчество"
				value={middleName}
				onChange={(e) => setMiddleName(e.target.value)}
			/>

			<input
				className={styles.input}
				type="date"
				value={birthDate}
				onChange={(e) => setBirthDate(e.target.value)}
			/>

			<input
				className={styles.input}
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>

			<input
				className={styles.input}
				placeholder="Телефон (7XXXXXXXXXX)"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			/>

			<textarea
				className={styles.input}
				placeholder="Комментарий"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>

			<Button onClick={handleSubmit}>Оформить заказ</Button>
		</div>
	);
};
