import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

const Olahraga = (props) => {
	return (
		<div>
			<Navbar
				Color={props.Color}
				setLight={props.setLight}
				menu={props.menu}
				light={props.light}
				active={"/olahraga"}
			/>
			<Jumbotron Color={props.Color} title="OLAHRAGA" wdh={props.wdh}>
				Etiam luctus imperdiet justo eu sagittis. Pellentesque habitant
				morbi tristique senectus et netus et malesuada fames ac turpis
				egestas. Mauris iaculis sapien commodo posuere auctor.
			</Jumbotron>
			<Footer Color={props.Color} />
		</div>
	);
};

export default Olahraga;
