import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function PublishPagePreview() {
	const styles = {
		marginTop: "6rem",
	};

	const handleClick = () =>{
		alert('Blog successfully published')
	}

	return (
		<>
			<Container style={styles}>
				<Row>
					<Col xs={12} md={6}>
						<h2>Story Preview</h2>
						<div className="colorBox">
							Include high quality images to provide more <br /> aesthetics and
							more information
						</div>
						<h3>Robotics & Autonomous Systems</h3> <hr />
						<h4>Comptabilité - Problème Baisse de Charges</h4> <hr />
						<h5>
							<strong>Note:</strong> Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo con
						</h5>
					</Col>
					<Col xs={12} md={6} className="inputTarget">
						<h2>
							<span>Publishing to</span>: Adubee
						</h2>
						<h5>
							Add or change topics (up to 5 readers) so readers may know what
							the story entails.
						</h5>
						<input placeholder="Add a topic" type="text" />
						<h5>
							Learn more about what happens to your post when you publish.
						</h5>
						<div className="buttonContainer">
							<button onClick={handleClick} className="variant">
								<Link to={"/userpage"}>Publish now </Link>
							</button>
							<button className="variant2">
								<Link to={"/publishpage"}> Schedule for later</Link>
							</button>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default PublishPagePreview;
