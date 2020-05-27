import Link from "next/link";

function Navbar(props) {
	return (
		<nav>
			<h1>{props.title}</h1>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
