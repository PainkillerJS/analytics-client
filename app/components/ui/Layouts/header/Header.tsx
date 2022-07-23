import type { FC } from "react";

import LoginForm from "@/ui/Layouts/header/login-form/LoginForm";
import Logo from "@/ui/Layouts/header/Logo";

import styles from "./Header.module.scss";

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<LoginForm />
		</header>
	);
};

export default Header;
