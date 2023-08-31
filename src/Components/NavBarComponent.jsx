import logo from "../assets/logo.png";
import write from "../assets/write.svg";
import bell from "../assets/bell.svg";
import NonButtonDropdown from "./DropdownComponent";
import { Link } from "react-router-dom";

function NavBarComponent() {
	const avatarStyles = {
		width: "3rem",
		padding: "0",
		margin: "0",
	};
	const listStyles = {
		listStyle: "none",
		display: "flex",
		alignItems: "center",
	};
	const writeIconStyles = {
		width: "1.9rem",
		margin: 0,
		paddingRight: "0.5rem",
	};
	const h6Styles = {
		margin: 0,
		display: "flex",
		alignItems: "center",
		fontSize: "0.8rem",
	};
	return (
		<nav className="navbar">
			<Link to={"/userpage"}>
				<img src={logo} alt="" />
			</Link>

			<ul style={listStyles}>
				<li>
					{" "}
					<Link to={"/library"}>Your Articles</Link>{" "}
				</li>
				<li>For You</li>
				<li>
					{" "}
					<Link to={"/favarticles"}>Favourites</Link>{" "}
				</li>
			</ul>

			<ul style={listStyles}>
				<li>
					<h6 style={h6Styles}>
						{" "}
						<Link to={'/publishpage'}>
							<img style={writeIconStyles} src={write} alt="" /> Write
						</Link>
						
					</h6>
				</li>
				<li>
					<img style={writeIconStyles} src={bell} alt="" />
				</li>
				<li>
					<NonButtonDropdown />
				</li>
			</ul>
		</nav>
	);
}

export default NavBarComponent;
