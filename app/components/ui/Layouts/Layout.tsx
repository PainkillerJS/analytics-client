import type { FC, PropsWithChildren } from "react";

import Meta from "@/utils/Meta/Meta";

import Header from "@/ui/Layouts/header/Header";

import type { MetaProps } from "@/utils/Meta/Meta.type";

const Layout: FC<PropsWithChildren<MetaProps>> = ({ children, ...meta }) => {
	return (
		<>
			<Meta {...meta} />
			<div>
				<Header />
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;
