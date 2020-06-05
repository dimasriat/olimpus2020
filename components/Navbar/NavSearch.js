import React from "react";

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
					color: ${Color.font};
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

export default NavSearch;
