const Container = (props) => (
	<div className="container">
		{props.children}
		<style jsx>{`
			.container {
				padding: 0 ${props.pad ? props.pad : "1rem"};
			}
		`}</style>
	</div>
);

export default Container;
