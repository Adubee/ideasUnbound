import logo from "../assets/logo.png";
import rightArrow from "../assets/rightarrow.svg";
import { Link } from "react-router-dom";

function SignIn() {
	

	const styles = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginTop: "2.8rem",
	};
	const fontStyles = {
		fontFamily: "CabinetBold",
	};
	const h6Styles = {
		textAlign: "center",
	};
	const iconStyles = {
		width: "1.6rem",
		paddingLeft: "0.5rem",
	};
	const h5Styles = {
		margin: 0,
		fontFamily: "CabinetMedium",
	};
	return (
		<div style={styles}>
			<img className="logo" src={logo} alt="" />
			<h1>Welcome Back</h1>
			<div className="fieldContainer">
				<h5 style={h5Styles}>Username or Email address</h5>
				<input type="text" />
					<button>
						<Link to={'/signincontinue'} > Continue <img style={iconStyles} src={rightArrow} alt="" /></Link>
						
					</button>
			</div>
			<h6 style={h6Styles}>
				Do you have an account yet?
				<br />
				<span style={fontStyles}>Get started here</span>
			</h6>
		</div>
	);
}

export default SignIn;
