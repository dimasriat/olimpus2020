import { useState } from "react";

import NavLogo from "./Navbar/NavLogo";
import NavSearch from "./Navbar/NavSearch";
import NavSidebar from "./Navbar/NavSidebar";
import NavControl from "./Navbar/NavControl";
import NavMenu from "./Navbar/NavMenu";

const Navbar = (props) => {
	const Color = props.Color;
	const [openSidebar, setOpenSidebar] = useState(false);
	return (
		<div>
			<div className="navbar">
				<div className="navbar-container">
					<NavLogo Color={Color} />
					<NavMenu
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
					active={props.active}
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
					z-index: 100;
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
