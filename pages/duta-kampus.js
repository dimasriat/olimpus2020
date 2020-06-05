import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

const DutaKampus = (props) => {
	return (
		<div>
			<Navbar
				Color={props.Color}
				setLight={props.setLight}
				menu={props.menu}
				light={props.light}
				active={"/duta-kampus"}
			/>
			<Jumbotron Color={props.Color} title="DUTA KAMPUS" wdh={props.wdh}>
				Pellentesque at ligula eget magna aliquet posuere. Ut quis magna
				et felis blandit aliquet in eu ipsum. Cras ac turpis tristique,
				pellentesque eros sit amet, blandit tortor.
			</Jumbotron>
			<Footer Color={props.Color} />
		</div>
	);
};

export default DutaKampus;
