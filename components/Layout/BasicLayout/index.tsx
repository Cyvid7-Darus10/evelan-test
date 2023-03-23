import { ReactNode } from 'react';
import Head from 'next/head';

const BasicLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Evelan test task" />
				<meta property="og:title" content="Evelan test task" />
				<meta property="og:description" content="Evelan test task" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/fg-logo.png" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:title" content="Evelan test task" />
				<meta property="twitter:description" content="Evelan test task" />
				<title>Evelan Test</title>
			</Head>
			<div>{children}</div>
		</>
	);
};

export default BasicLayout;
