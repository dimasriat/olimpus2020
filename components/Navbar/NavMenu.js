import Link from "next/link";

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
					border-top: 4px solid ${props.active ? Color.primary : Color.bg};
					background-color: ${Color.bg};
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: ${props.active ? Color.primary : Color.font};
					font-weight: ${props.active ? "bold" : "normal"};
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

const NavMenu = (props) => {
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

export default NavMenu;
