import Container from "../components/Container";
import { useState, useLayoutEffect } from "react";

const Jumbotron = (props) => {
	const Color = props.Color;
	// const [wdh, setWdh] = useState("100%");
	// useLayoutEffect(() => setWdh(`${window.innerHeight}px`), []);
	
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
				.container {
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;
					height: ${props.wdh};
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
					margin-top: 2rem;
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
