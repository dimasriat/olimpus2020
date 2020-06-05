import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faBars } from "@fortawesome/free-solid-svg-icons";


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

export default NavControl;
