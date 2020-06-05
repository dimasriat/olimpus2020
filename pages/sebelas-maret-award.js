import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

const SebelasMaretAward = (props) => {
	return (
		<div>
			<Navbar
				Color={props.Color}
				setLight={props.setLight}
				menu={props.menu}
				light={props.light}
				active={"/sebelas-maret-award"}
			/>
			<Jumbotron Color={props.Color} title="SEBELAS MARET AWARD" wdh={props.wdh}>
				Cras elementum sapien eget mauris semper bibendum. Mauris luctus
				tristique bibendum. Fusce id venenatis nunc.
			</Jumbotron>
			<Footer Color={props.Color} />
		</div>
	);
};

export default SebelasMaretAward;
