// import logo from "../assets/logo.png";
import NavBar from "./NavBar";
import books from "../assets/books.png";
import people from "../assets/people.png";
import newspaper from "../assets/newspaper.png";
import talking from "../assets/talking.png";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import email from "../assets/email.svg";
import facebook from "../assets/facebook.svg";
import { Link } from "react-router-dom";



function HomePage() {
	// const logoStyles = {
	// 	width: "7rem",
	// 	margin: "0.3rem 0 0 3rem",
	// };
	const bookStyles = {
		width: "26rem",
	};
	return (
		<div>
			<NavBar />
			<div className="homePageContainer1">
				<h1>
					Unveil your <span>potential</span> <br /> through writing
				</h1>
				<h6>Create positive memories with your words</h6>
				<button>
					<Link to={'/signin'} >Create a blog</Link>
					</button>
				<img style={bookStyles} src={books} alt="" />
			</div>

			<div className="homePageContainer1 homePageContainer2">
				<h1>
					Unlimited <span>opportunities</span> <br /> across the internet
				</h1>
				<div className="gridContainer">
					<img className="column" style={bookStyles} src={people} alt="" />
					<h3 className="column">
						Connect with over a million <span>likeminded</span> <br /> Individuals
					</h3>
				</div>
			</div>

			<div className="homePageContainer1 homePageContainer3 ">
				<h3>
					Start your blog <br /> post today
				</h3>
        <h6>Let's get started</h6>
			</div>

			<div className="homePageContainer1 homePageContainer4">
				<h1>
					Need an <span>active</span> voice
				</h1>
				<div className="gridContainer">
					<h3 className="column">
						Start your own <span>newsletter</span> <br /> blog post, with absolutwe control over your content
					</h3>
					<img className="column" style={bookStyles} src={newspaper} alt="" />
				</div>
			</div>

			<div className="homePageContainer1 homePageContainer5">
				<h1>
				Create a <span>vast</span> network
				</h1>
				<div className="gridContainer">
					<h3 className="column">
						Share your thoughts with <span>many more</span> just like you.
					</h3>
					<img className="column" style={bookStyles} src={newspaper} alt="" />
				</div>
			</div>

			<div className="homePageContainer1 homePageContainer1">
				<h1>
				Contact Us
				</h1>
				<div className="gridContainer">
					<h3 className="column">
						Reach us on the following <span>platforms.</span>
						<ul>
							<li><img src={insta} alt="" /></li>
							<li><img src={twitter} alt="" /></li>
							<li><img src={email} alt="" /></li>
							<li><img src={facebook} alt="" /></li>
						</ul>
					</h3>
					<img className="column" style={bookStyles} src={talking} alt="" />
				</div>
			</div>

		</div>
	);
}

export default HomePage;
