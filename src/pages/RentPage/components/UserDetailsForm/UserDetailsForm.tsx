import { useRent } from "../../contexts/RentContext";

export const UserDetailsForm = () => {
	const { data } = useRent();
	console.log(data);

	return (
		<div>
			<h2> UserDetailsForm заказа</h2>
		</div>
	);
};
