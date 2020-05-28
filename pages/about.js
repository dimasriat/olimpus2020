import Navbar from "./components/navbar";

function AboutPage() {
	return (
		<div className="container">
			<Navbar
				title="dimskuyyy"
				menu={[
					{ path: "/", name: "Menu" },
					{ path: "/about", name: "About" },
				]}
			/>
			<div>Hello world ini A B O U T</div>
		</div>
	);
}

export default AboutPage;
