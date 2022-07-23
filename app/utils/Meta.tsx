import type { FC } from "react";

import Head from "next/head";

interface MetaProps {
	title: string;
	description?: string;
}

const Meta: FC<MetaProps> = ({ description, title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

				{description ? (
					<meta
						itemProp="description"
						name="description"
						content={description}
					/>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
		</>
	);
};

export default Meta;
