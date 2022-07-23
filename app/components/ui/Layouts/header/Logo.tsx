import type { FC } from "react";

import styles from "./Header.module.scss";

const Logo: FC = () => {
	return <div className={styles.header__logo}>Analytics</div>;
};

export default Logo;
