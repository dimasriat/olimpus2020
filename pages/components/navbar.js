import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar(props) {
	const [hide, setHide] = useState(true);
	const [cursor, setCursor] = useState(true);

	useEffect(() => {
		const id = setInterval(() => {
			setCursor((cursor) => !cursor);
		}, 500);
		return () => clearInterval(id);
	}, []);

	const primary = "rgb(32, 191, 107)";
	return (
		<nav className={hide ? "sidebar-hide" : ""}>
			<div className="navbar">
				<div className="navbar-brand">
					OM 2020{cursor ? "_" : ""}
				</div>
				<button
					className="navbar-button"
					onClick={() => setHide((hide) => !hide)}
				>
					{hide ? "≡" : "×"}
				</button>
			</div>
			<div className={`sidebar ${hide ? "sidebar-hide" : ""}`}>
				<ul>
					<li>Menu hello</li>
					<li>Menu world</li>
					<li>Menu ihiyyy</li>
				</ul>
			</div>
			<style jsx>{`
				nav {
					position: fixed;
					height: 100%;
					width: 100%;
					color: black;
					background-color: rgba(0, 0, 0, 0.5);
					transition: 0.25s background-color;
					z-index: 1;
				}

				nav.sidebar-hide {
					background-color: rgba(0, 0, 0, 0);
					transition: 0.25s background-color;
				}

				.navbar {
					padding: 0 1rem;
					display: flex;
					justify-content: space-between;
					background-color: white;
					font-weight: bold;
				}

				.navbar-brand {
					padding: 0.5rem 0;
					font-size: 2rem;
					color: ${primary};
				}

				.navbar-button {
					padding: 0.5rem 0 0.5rem 1rem;
					color: ${primary};
					background-color: rgba(0, 0, 0, 0);
					font-size: 2rem;
					border: none;
					outline: none;
				}

				.sidebar {
					height: 100%;
					position: fixed;
					right: 0;
					width: 75%;
					background-color: white;
					transition: 0.25s width;
				}

				@media only screen and (min-width: 768px) {
					.sidebar {
						width: 25%;
					}
				}

				.sidebar.sidebar-hide {
					width: 0%;
					transition: 0.25s width;
				}

				ul {
					list-style: none;
					margin: 0;
					padding: 0 1rem;
				}

				li {
					padding: 1rem 0 0;
				}
			`}</style>
		</nav>
	);
}

export default Navbar;
