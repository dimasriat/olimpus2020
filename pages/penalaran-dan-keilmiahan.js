import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

const PenalaranDanKeilmiahan = (props) => {
	return (
		<div>
			<Navbar
				Color={props.Color}
				setLight={props.setLight}
				menu={props.menu}
				light={props.light}
				active={"/penalaran-dan-keilmiahan"}
			/>
			<Jumbotron Color={props.Color} title="PENALARAN DAN KEILMIAHAN">
				Integer cursus porta iaculis. Phasellus semper condimentum diam,
				vitae vestibulum ligula bibendum vel. Aenean tristique convallis
				libero, vel ultricies augue fringilla nec.
			</Jumbotron>
			<Footer Color={props.Color} />
		</div>
	);
};

export default PenalaranDanKeilmiahan;
