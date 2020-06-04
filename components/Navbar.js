import Link from "next/link";
import Container from "../components/Container";
//import Color from "../utils/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
					${props.active
						? `border-top: 4px solid ${Color.primary}`
						: `border-top: 4px solid ${Color.bg}`};
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

const NavSearch = (props) => {
	const Color = props.Color;
	return (
		<div className="navbar-search">
			<input type="search" placeholder="search" className="search-bar" />
			<style jsx>{`
				.navbar-search {
					padding: 1rem 0;
					margin: 0 0.5rem;
				}

				.search-bar {
					width: 100%;
					background-color: ${Color.secondary};
					border: none;
					padding: 0.5rem;
					border-radius: 0.75rem;
					font-size: 1rem;
				}

				.search-bar:focus {
					background-color: ${Color.bg};
					outline: none;
					border: 1px solid ${Color.primary};
				}
			`}</style>
		</div>
	);
};

const NavSidebar = (props) => {
	const Color = props.Color;
	return (
		<div className={`navbar-sidebar ${props.openSidebar && "open"}`}>
			<Container>
				<h4>Test</h4>
				<p>hello 123</p>
				<p>hello 456</p>
				<p>hello 789</p>
			</Container>
			<style jsx>{`
				h4 {
					color: ${Color.primary};
					font-size: 1.5rem;
				}
				.navbar-sidebar {
					width: 0%;
					position: fixed;
					height: 100%;
					display: flex;
					right: 0;
					background-color: ${Color.bg};
					border-left: none;
					transition: 0.25s width;
				}
				.open {
					width: 80%;
					transition: 0.25s width;
					box-shadow: -1rem 0 4rem rgba(0, 0, 0, 0.25);
					z-index: -3;
					border-left: 1px solid ${Color.secondary};
				}
				@media only screen and (min-width: 48rem) {
					.open {
						width: 25%;
					}
				}
			`}</style>
		</div>
	);
};

const NavControl = (props) => {
	const Color = props.Color;
	return (
		<div className="navbar-control">
			<div className="navbar-control-button">
				<FontAwesomeIcon
					icon={faMoon}
					onClick={() => props.setLight((state) => !state)}
					color={props.light ? Color.secondary : Color.primary}
				/>
			</div>
			<div className="navbar-control-button">
				<FontAwesomeIcon
					icon={faBars}
					onClick={() => props.setOpenSidebar((state) => !state)}
					color={props.openSidebar ? Color.primary : Color.secondary}
				/>
			</div>
			<style jsx>{`
				.navbar-control {
					display: flex;
					font-size: 1.5rem;
					margin: 0 1rem;
				}
				.navbar-control-button {
					margin: 0 0.5rem;
				}
			`}</style>
		</div>
	);
};

const NavInlineMenus = (props) => {
	return (
		<div className="navbar-menu">
			{props.menu.map((item) => (
				<NavButton
					key={item.link}
					href={item.link}
					Color={props.Color}
					active={item.link == props.active}
				>
					{item.caption}
				</NavButton>
			))}
			<style jsx>{`
				.navbar-menu {
					display: none;
				}

				@media only screen and (min-width: 64rem) {
					.navbar-menu {
						display: flex;
					}
				}
			`}</style>
		</div>
	);
};

const Navbar = (props) => {
	const Color = props.Color;
	const [openSidebar, setOpenSidebar] = useState(false);
	return (
		<div>
			<div className="navbar">
				<div className="navbar-container">
					<NavLogo Color={Color} />
					<NavInlineMenus
						Color={props.Color}
						menu={props.menu}
						active={props.active}
					/>
					<NavSearch Color={Color} />
					<NavControl
						Color={props.Color}
						light={props.light}
						setLight={props.setLight}
						setOpenSidebar={setOpenSidebar}
						openSidebar={openSidebar}
						menu={props.menu}
					/>
				</div>
				<NavSidebar
					Color={props.Color}
					menu={props.menu}
					openSidebar={openSidebar}
				/>
			</div>
			<style jsx>{`
				.navbar {
					border-bottom: 1px solid ${Color.secondary};
					background-color: ${Color.bg};
					color: ${Color.font};
					position: fixed;
					top: 0;
					width: 100%;
				}

				.navbar-container {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					background-color: ${Color.bg};
				}
			`}</style>
		</div>
	);
};

export default Navbar;
