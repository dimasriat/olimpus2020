import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown as dropicon } from "@fortawesome/free-solid-svg-icons";

const SidebarButton = (props) => {
	const Color = props.Color;
	const [expand, setExpand] = useState(false);
	return (
		<div className="container">
			<button onClick={() => setExpand((state) => !state)}>
				{props.caption}
				<FontAwesomeIcon
					icon={dropicon}
					color={expand ? Color.primary : Color.secondary}
				/>
			</button>
			{props.children && (
				<div className={`dropmenu ${expand && `expand`}`}>
					{props.children}
				</div>
			)}
			<style jsx>{`
				.container {
					width: 100%;
					padding: 0 1rem 1rem;
				}
				.dropmenu {
					height: 0;
					overflow: hidden;
				}
				.expand {
					height: 100%;
				}
				button {
					width: 100%;
					color: ${Color.primary};
					border: none;
					border-bottom: 1px solid
						${expand ? Color.primary : Color.secondary};
					background-color: ${Color.bg};
					font-size: 1.5rem;
					font-weight: bold;
					text-align: left;
					padding: 0.5rem 0;
					display: flex;
					justify-content: space-between;
				}
				button:focus {
					outline: none;
				}
			`}</style>
		</div>
	);
};

const SidebarLink = (props) => {
	const Color = props.Color;
	return (
		<div className="container">
			<Link href={props.href ? props.href : "#"}>
				<a>{props.children}</a>
			</Link>
			<style jsx>{`
				.container {
					padding: 0.5rem 0;
				}
				a {
					color: ${props.active ? Color.primary : Color.font};
					text-decoration: none;
					font-weight: normal;
					font-weight: ${props.active ? "bold" : "normal"};
				}

				a:hover {
					color: ${Color.primary};
					text-decoration: none;
				}
			`}</style>
		</div>
	);
};

const NavSidebar = (props) => {
	const Color = props.Color;
	return (
		<div className={`navbar-sidebar ${props.openSidebar && "open"}`}>
			<SidebarButton caption="Lomba" Color={Color}>
				{props.menu.map((item) => (
					<SidebarLink
						key={item.link}
						href={item.link}
						Color={props.Color}
						active={item.link == props.active}
					>
						{item.caption}
					</SidebarLink>
				))}
			</SidebarButton>
			<SidebarButton caption="Lain-lain" Color={Color}>
				<SidebarLink Color={props.Color}>Menu Pendaftaran</SidebarLink>
				<SidebarLink Color={props.Color}>Buku Panduan</SidebarLink>
				<SidebarLink Color={props.Color}>Galeri</SidebarLink>
				<SidebarLink Color={props.Color}>Tentang</SidebarLink>
			</SidebarButton>
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
					flex-direction: column;
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

export default NavSidebar;
