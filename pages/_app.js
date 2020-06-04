import color from "../utils/Color";
import menu from "../utils/Menu";
import { useState } from "react";

const App = ({ Component, pageProps }) => {
	const [light, setLight] = useState(true);
	const Color = color[light ? "LIGHT" : "DARK"];

	return (
		<>
			<Component
				{...pageProps}
				Color={Color}
				light={light}
				setLight={setLight}
				menu={menu}
			/>
			<style jsx global>{`
				* {
					box-sizing: border-box;
				}
				@font-face {
					font-family: "Gilroy";
					src: url("/fonts/Gilroy-Light.otf") format("opentype");
					font-weight: normal;
					font-style: normal;
				}
				@font-face {
					font-family: "Gilroy";
					src: url("/fonts/Gilroy-ExtraBold.otf") format("opentype");
					font-weight: bold;
					font-style: normal
				}
				body {
					margin: 0;
					padding: 0;
					font-family: "Gilroy", sans-serif;
					color: ${Color.font};
					background-color: ${Color.bg};
				}
				html,
				body,
				body > div:first-child,
				div#_next,
				div#_next > div,
				div#_next > div > div {
					min-height: 100%;
				}
			`}</style>
		</>
	);
};

export default App;
