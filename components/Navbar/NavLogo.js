import React from "react";
import Link from "next/link";

const NavLogo = (props) => {
	const Color = props.Color;
	return (
		<div className="navbar-logo">
			<Link href="/">
				<a>OM2020</a>
			</Link>
			<style jsx>{`
				.navbar-logo {
					font-weight: bold;
					font-size: 1.25rem;
					margin: 0 1rem;
				}
				.navbar-logo a {
					color: ${Color.primary};
					text-decoration: none;
				}
			`}</style>
		</div>
	);
};

export default NavLogo;
