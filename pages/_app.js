//import "./styling/style.scss";

import { Container } from "next/app";

export default function MyApp({ Component, pageProps }) {
	const primary = "rgb(32, 191, 107)";
	return (
		<Container>
			<Component {...pageProps} />
			<style jsx global>{`
				* {
					box-sizing: border-box;
				}

				body {
					margin: 0;
					padding: 0;
					font-family: 'Gilroy', sans-serif;
					background-color: ${primary};
				}

				html,
				body,
				body > div:first-child,
				div#__next,
				div#__next > div,
				div#__next > div > div {
					height: 100%;
				}
			`}</style>
		</Container>
	);
}
