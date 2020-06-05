import Container from "../components/Container";

const VideoTeaser = (props) => {
	const Color = props.Color;
	return (
		<Container>
			<div className="video-ctr">
				<h3>VIDEO TEASER</h3>
				<div className="fakevideo"></div>
				<style jsx>{`
					.video-ctr {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: flex-start;
						margin-bottom: 2rem;
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
				`}</style>
			</div>
		</Container>
	);
};

export default VideoTeaser;
