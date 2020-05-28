import Navbar from "./components/navbar";

function HomePage() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="text">OLIMPUS 2020</div>
			</div>
			<style jsx>{`
				.container {
					padding: 0 1rem;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
				}

				.text {
					font-size: 6rem;
					color: rgba(38, 222, 129, 0);
					font-weight: bold;
					animation: fadeinout 7.5s  ease-in;
					animation-fill-mode: both;
				}

				@keyframes fadeinout {
					0% {
						color: rgba(38, 222, 129, 0);
					}

					100% {
						color: rgba(38, 222, 129, 1);
					}
				}
			`}</style>
		</div>
	);
}

export default HomePage;
