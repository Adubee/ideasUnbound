import logo from "../assets/logo.png";
import { Link } from "react-router-dom";



function NavBar() {
	
	return (
		<nav className="navbar">
      <img src={logo} alt="" />
			<Link to={'/signin'}><h2>SIGN IN</h2></Link>
		</nav>
	);
}

export default NavBar;
