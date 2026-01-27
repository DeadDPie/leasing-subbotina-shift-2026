import { Link } from "react-router-dom";
import {
	Button,
	ExitIcon,
	LogoLeasingIcon,
	ModeIcon,
	TimeIcon,
	UserIcon,
} from "..";

import styles from "./Header.module.css";

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.logo}>
				<LogoLeasingIcon />
			</Link>

			<div className={styles.inner}>
				<div className={styles.navigation}>
					<Button variant="ghost">
						<UserIcon />
						Профиль
					</Button>

					<Button variant="ghost">
						<TimeIcon /> Заказы
					</Button>
				</div>

				<div className={styles.actions}>
					<Button variant="ghost">
						<ExitIcon /> Выйти
					</Button>
					<Button variant="ghost">
						<ModeIcon />
					</Button>
				</div>
			</div>
		</header>
	);
};
