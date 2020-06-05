import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

const KomunitasDaerah = (props) => {
	return (
		<div>
			<Navbar
				Color={props.Color}
				setLight={props.setLight}
				menu={props.menu}
				light={props.light}
				active={"/komunitas-daerah"}
			/>
			<Jumbotron Color={props.Color} title="KOMUNITAS DAERAH">
				Ut a mauris egestas, ultricies leo lacinia, gravida ante. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit. Integer eros
				elit, commodo nec semper vel, viverra in purus.
			</Jumbotron>
			<Footer Color={props.Color} />
		</div>
	);
};

export default KomunitasDaerah;
