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
			<Jumbotron Color={props.Color} title="DUTA KAMPUS">
				Ullamcorper est in, sodales urna. Mauris Siaculis sapien commodo
				posuere auctor. Nunc bibendum molestie mollis.Lorem ipsum dolor
				sit amet, consectetur adipiscing elit. Nunc eget pellentesque
				quam, convallis aliquet nulla. Maecenas a felis tristique,.
			</Jumbotron>
			<Footer Color={props.Color} />
		</div>
	);
};

export default DutaKampus;
