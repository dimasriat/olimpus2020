import Container from "../components/Container";
//import Color from "../utils/Color";

const Jumbotron = (props) => {
	const Color = props.Color;
	return (
		<div className="container">
			<Container>
				<div className="wrapper">
					<h1>{props.title ? props.title : "OLIMPUS 2020"}</h1>
					<h2>{props.children}</h2>
					<div className="jumbotron-control">
						<button>Lihat Buku Panduan</button>
						<button>Daftarkan Dirimu</button>
					</div>
				</div>

				<div className="jumbotron-video">
					<h3>VIDEO TEASER</h3>
					<div className="fakevideo"></div>
				</div>
			</Container>
			<style jsx>{`
				h1 {
					text-align: center;
					font-size: 4rem;
					color: ${Color.primary};
				}
				h2,
				h3 {
					text-align: center;
					font-size: 1.5rem;
				}

				.fakevideo {
					width: 100%;
					height: 360px;
					background-color: ${Color.secondary};
					border-radius: 0.75rem;
				}

				@media only screen and (min-width: 64rem) {
					.fakevideo {
						width: 640px;
						height: 360px;
					}
				}

				.jumbotron-video {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: flex-start;
				}

				.container {
					padding: 2rem 0;
					margin-top: 2rem;
				}

				.wrapper {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}

				.jumbotron-control {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					margin: 4rem 0 2rem;
				}

				button {
					margin: 0 1rem;
					font-size: 1rem;
					background-color: ${Color.primary};
					color: white;
					border: none;
					border-radius: 0.75rem;
					padding: 1rem;
				}

				@media only screen and (min-width: 64rem) {
					.wrapper {
						padding: 2rem 16rem;
					}
				}
			`}</style>
		</div>
	);
};

export default Jumbotron;
