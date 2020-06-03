import Link from "next/link";
import Container from "../components/Container";
//import Color from "../utils/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMoon,
	faTrophy,
	faFutbol,
	faUsers,
	faFilm,
	faBook,
	faBars,
} from "@fortawesome/free-solid-svg-icons";

const NavButton = (props) => {
	const Color = props.Color;
	return (
		<>
			<Link href={props.href}>
				<a>{props.children}</a>
			</Link>
			<style jsx>{`
			a {
				width: 100%;
				padding: 1rem 0;
				margin: 0 0.25rem;
				border: none;
				border-${props.top ? "top" : "bottom"}: 4px solid
					${props.active ? Color.primary : "rgba(0, 0, 0, 0)"};
				background-color: ${Color.bg};
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: ${props.active ? Color.primary : Color.font};
				text-decoration: none;
				text-align: center;
			}
			a:hover {
				color: ${Color.primary};
			}
		`}</style>
		</>
	);
};

const Navbar = (props) => {
	const Color = props.Color;
	return (
		<div className="container">
			<div className="navbar-top">
				<Container>
					<div className="navbar-top-container">
						<div className="navbar-logo">
							<Link href="/">
								<a>OM2020</a>
							</Link>
						</div>
						<div className="navbar-top-menu">
							{props.menu.map((item) => (
								<NavButton
									key={item.link}
									top
									href={item.link}
									Color={props.Color}
									active={item.link == props.active}
								>
									{item.caption}
								</NavButton>
							))}
						</div>
						<div className="navbar-top-search">
							<input
								type="search"
								placeholder="search"
								className="search-bar"
							/>
						</div>
						<div className="navbar-control">
							<div className="navbar-control-button">
								<FontAwesomeIcon
									icon={faMoon}
									onClick={() =>
										props.setLight((state) => !state)
									}
								/>
							</div>
							<div className="navbar-control-button">
								<FontAwesomeIcon icon={faBars} />
							</div>
						</div>
					</div>
				</Container>
			</div>
			{/**
			<div className="navbar-bottom">
				<NavButton href="#" active Color={props.Color}>
					<FontAwesomeIcon icon={faFutbol} />
				</NavButton>
				<NavButton href="#" Color={props.Color}>
					<FontAwesomeIcon icon={faUsers} />
				</NavButton>
				<NavButton href="#" Color={props.Color}>
					<FontAwesomeIcon icon={faFilm} />
				</NavButton>
				<NavButton href="#" Color={props.Color}>
					<FontAwesomeIcon icon={faBook} />
				</NavButton>
				<NavButton href="#" Color={props.Color}>
					<FontAwesomeIcon icon={faTrophy} />
				</NavButton>
			</div> */}
			<style jsx>{`
				.navbar-control {
					display: flex;
				}
				.navbar-control-button {
					margin: 0 0.5rem;
				}
				.search-bar {
					width: 16rem;
					background-color: ${Color.secondary};
					border: none;
					padding: 0.5rem;
					border-radius: 0.75rem;
					font-size: 1rem;
				}
				.navbar-logo a {
					color: ${Color.primary};
					text-decoration: none;
				}

				.navbar-top-search {
					padding: 1rem 0;
				}

				.search-bar:focus {
					background-color: ${Color.bg};
					outline: none;
					border: 1px solid ${Color.primary};
				}
				.navbar-control {
					font-size: 1.5rem;
				}
				.navbar-top {
					border-bottom: 1px solid ${Color.secondary};
					background-color: ${Color.bg};
					color: ${Color.font};
					position: fixed;
					top: 0;
					width: 100%;
				}

				.navbar-top-container {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
				}

				.navbar-top-menu {
					display: none;
				}

				@media only screen and (min-width: 64rem) {
					.navbar-top-menu {
						display: flex;
					}
				}

				.navbar-logo {
					font-weight: bold;
					font-size: 1.25rem;
				}

				.navbar-bottom {
					width: 100%;
					position: fixed;
					bottom: 0;
					display: flex;
					flex-direction: row;
					border-top: 1px solid ${Color.secondary};
					background-color: ${Color.bg};
				}

				@media only screen and (min-width: 64rem) {
					.navbar-bottom {
						display: none;
					}
				}
			`}</style>
		</div>
	);
};

export default Navbar;
