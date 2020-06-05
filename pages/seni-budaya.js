import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

const SeniBudaya = (props) => {
	return (
		<div>
			<Navbar
				Color={props.Color}
				setLight={props.setLight}
				menu={props.menu}
				light={props.light}
				active={"/seni-budaya"}
			/>
			<Jumbotron Color={props.Color} title="SENI BUDAYA" wdh={props.wdh}>
				Maecenas a felis tristique, ullamcorper est in, sodales urna. Ut
				sed suscipit mi. Donec laoreet ligula ut cursus tincidunt.
			</Jumbotron>
			<Footer Color={props.Color} />
		</div>
	);
};

export default SeniBudaya;
