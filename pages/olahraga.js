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
			<Jumbotron Color={props.Color} title="OLAHRAGA">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
				eget pellentesque quam, convallis aliquet nulla. Maecenas a
				felis tristique, ullamcorper est in, sodales urna. Mauris
				iaculis sapien commodo posuere auctor. Nunc bibendum molestie
				mollis.
			</Jumbotron>
			<Footer Color={props.Color} />
		</div>
	);
};

export default Olahraga;
