import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

const Home = (props) => {
	return (
		<div>
			<Navbar
				Color={props.Color}
				light={props.light}
				setLight={props.setLight}
				menu={props.menu}
			/>
			<Jumbotron Color={props.Color}>
				Olimpus adalah sebuah event yang diselenggarakan oleh Keluarga
				Besar Mahasiswa (KBM) Universitas Sebelas Maret Surakarta. Event
				ini mencakup bidang keolahragaan, seni budaya, penalaran dan
				keilmiahan, Sebelas Maret Award, Komda dan duta kampus.
			</Jumbotron>
			<Footer Color={props.Color} />
		</div>
	);
};

export default Home;
