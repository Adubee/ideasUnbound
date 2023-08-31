import { Container, Row, Col } from "react-bootstrap";
import NavBarComponent from "./NavBarComponent";
import emptyStar from "../assets/emptyStar.svg";
import fullStar from "../assets/fullStar.svg";

function Library() {
	// const handleClick = (e) => {
	//   e.preventDefault()
	// }

	// useEffect(()=>{
	//   const anchor = document.querySelectorAll('anchor')
	//   console.log(anchor)
	//   for (let i of anchor){
	//     i.addEventListener('click', handleClick)

	//     return () => {
	//       i.removeEventListener('click', handleClick)
	//     }
	//   }
	// })

	return (
		<>
			<NavBarComponent />
			<Container className="contain library">
				<Row>
					<Col xs={12} md={7}>
						<h1>Your Library</h1>
						<ul>
							<li>
								<a href="" id="anchor">
									<h4>Your List</h4>
								</a>
							</li>
							<li>
								<a href="" id="anchor">
									<h4>Saved List</h4>
								</a>
							</li>
							<li>
								<a href="" id="anchor">
									<h4>Highlights </h4>
								</a>
							</li>
							<li>
								<a href="" id="anchor">
									<h4>Reading History</h4>
								</a>
							</li>
						</ul>

						<Row>
							<Col xs={12} md={8}>
								<img
									src="https://randomwordgenerator.com/img/picture-generator/g73c363314e11c293cc5019c5d926b1a1c6e5c4407e966e57740ba96542ac999597b7df80d30481c60319f99ab0ad5ef3_640.jpg"
									alt=""
								/>
							</Col>
							<Col xs={12} md={12}>
								<h2>Fringilla Fusce Elit</h2>
								<h5>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Dolores, esse veritatis delectus quos eius mollitia in quaerat
									perspiciatis laudantium aliquam tempora, quisquam consequuntur
									non cupiditate placeat minima tempore, minus adipisci? Lorem
									ipsum dolor sit amet consectetur adipisicing elit. Quod, magni
									dolorem vel officiis nemo in placeat eos eum sequi architecto.
									Ea, quibusdam hic dolorum provident error animi harum impedit
									ipsam? Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Ratione, tenetur quos. Id, voluptatum voluptatem
									deleniti nesciunt omnis dolores quia est illo quibusdam ad
									illum saepe consequuntur optio dolor dolorem ex! Lorem ipsum
									dolor sit amet consectetur adipisicing elit. Suscipit nisi
									sapiente, quasi aspernatur natus voluptate nobis. Non corrupti
									ratione ea laboriosam? Ipsam nemo quasi consequatur reiciendis
									dolor quia veniam a. Dolores, esse veritatis delectus quos
									eius mollitia in quaerat perspiciatis laudantium aliquam
									tempora, quisquam consequuntur non cupiditate placeat minima
									tempore, minus adipisci? Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Quod, magni dolorem vel officiis
									nemo in placeat eos eum sequi architecto. Ea, quibusdam hic
									dolorum provident error
								</h5>
							</Col>
						</Row>

						<Row>
							<Col xs={12} md={8}>
								<img
									src="https://randomwordgenerator.com/img/picture-generator/53e7d14a4a50b10ff3d8992cc12c30771037dbf85254784a722d73dd9745_640.jpg"
									alt=""
								/>
							</Col>
							<Col xs={12} md={12}>
								<h2>Cupiditate placeat minima tempore</h2>
								<h5>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Dolores, esse veritatis delectus quos eius mollitia in quaerat
									perspiciatis laudantium aliquam tempora, quisquam consequuntur
									non cupiditate placeat minima tempore, minus adipisci? Lorem
									ipsum dolor sit amet consectetur adipisicing elit. Quod, magni
									dolorem vel officiis nemo in placeat eos eum sequi architecto.
									Ea, quibusdam hic dolorum provident error animi harum impedit
									ipsam? Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Ratione, tenetur quos. Id, voluptatum voluptatem
									deleniti nesciunt omnis dolores quia est illo quibusdam ad
									illum saepe consequuntur optio dolor dolorem ex! Lorem ipsum
									dolor sit amet consectetur adipisicing elit. Suscipit nisi
									sapiente, quasi aspernatur natus voluptate nobis. Non corrupti
									ratione ea laboriosam? Ipsam nemo quasi consequatur reiciendis
									dolor quia veniam a. Dolores, esse veritatis delectus quos
									eius mollitia in quaerat perspiciatis laudantium aliquam
									tempora, quisquam consequuntur non cupiditate placeat minima
									tempore, minus adipisci? Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Quod, magni dolorem vel officiis
									nemo in placeat eos eum sequi architecto. Ea, quibusdam hic
									dolorum provident error
								</h5>
							</Col>
						</Row>

						<Row>
							<Col xs={12} md={8}>
								<img
									src="https://randomwordgenerator.com/img/picture-generator/52e0d0414852af14f1dc8460962e33791c3ad6e04e507440742f7cd7914ec0_640.jpg"
									alt=""
								/>
							</Col>
							<Col xs={12} md={12}>
								<h2>Suscipit nisi sapiente</h2>
								<h5>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Dolores, esse veritatis delectus quos eius mollitia in quaerat
									perspiciatis laudantium aliquam tempora, quisquam consequuntur
									non cupiditate placeat minima tempore, minus adipisci? Lorem
									ipsum dolor sit amet consectetur adipisicing elit. Quod, magni
									dolorem vel officiis nemo in placeat eos eum sequi architecto.
									Ea, quibusdam hic dolorum provident error animi harum impedit
									ipsam? Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Ratione, tenetur quos. Id, voluptatum voluptatem
									deleniti nesciunt omnis dolores quia est illo quibusdam ad
									illum saepe consequuntur optio dolor dolorem ex! Lorem ipsum
									dolor sit amet consectetur adipisicing elit. Suscipit nisi
									sapiente, quasi aspernatur natus voluptate nobis. Non corrupti
									ratione ea laboriosam? Ipsam nemo quasi consequatur reiciendis
									dolor quia veniam a. Dolores, esse veritatis delectus quos
									eius mollitia in quaerat perspiciatis laudantium aliquam
									tempora, quisquam consequuntur non cupiditate placeat minima
									tempore, minus adipisci? Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Quod, magni dolorem vel officiis
									nemo in placeat eos eum sequi architecto. Ea, quibusdam hic
									dolorum provident error
								</h5>
							</Col>
						</Row>
					</Col>

					<Col xs={12} md={5} className="secondContainer">
						<h3>Recommended Topics</h3>
						<div className="topicContainer">
							<div className="topics">
								<h4>GovTech</h4>
							</div>
							<div className="topics">
								<h4>Future of Work</h4>
							</div>
							<div className="topics">
								<h4>Automation</h4>
							</div>
							<div className="topics">
								<h4>CoronaVirus</h4>
							</div>
							<div className="topics">
								<h4>3D Printing</h4>
							</div>
							<div className="topics">
								<h4>Design</h4>
							</div>
							<div className="topics">
								<h4>Smarter Cities</h4>
							</div>
							<div className="topics">
								<h4>Cloud Computing</h4>
							</div>
						</div>
						<a href="">See more topics</a>

						<div className="picksContainer">
							<h3>Top Picks</h3>
							<div>
								<div className="picks">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Vz6ewJMM6cy3HjK4IK0OJi_q6kYgR82IG0nFo1aL1Q&s"
										alt=""
									/>
                  {" "}
									<div className="stars">
										<h3>Annette Black</h3>
										<div className="starsContainer">
											<img src={fullStar} alt="" />
											<img src={fullStar} alt="" />
											<img src={fullStar} alt="" />
											<img src={fullStar} alt="" />
											<img src={fullStar} alt="" />
											<img src={emptyStar} alt="" />
										</div>
									</div>
                  <h3></h3>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Library;
