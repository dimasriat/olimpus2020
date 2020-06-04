import Container from "../components/Container";
//import Color from "../utils/Color";

const Footer = (props) => {
	const Color = props.Color;
	return (
		<div className="ctx">
			<Container>
				<div>TESTX</div>
			</Container>
			<style jsx>{`
				.ctx {
					padding: 2rem 0 8rem;
					background-color: ${Color.bg};
					color: ${Color.font};
					border-top: 1px solid ${Color.secondary};
				}
			`}</style>
		</div>
	);
};

export default Footer;
