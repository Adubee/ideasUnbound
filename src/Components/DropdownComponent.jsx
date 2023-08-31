import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import avatar from "../assets/avatar.png";
import stories from "../assets/stories.svg";
import stat from "../assets/stat.svg";
import library from "../assets/library.svg";
import profile from "../assets/profile.svg";
import { Link } from "react-router-dom";

const NonButtonDropdown = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleDropdownToggle = () => {
		setIsDropdownOpen((prevState) => !prevState);
	};

	const handleDropdownClose = () => {
		setIsDropdownOpen(false);
	};

	return (
		<div>
			<img
				onClick={handleDropdownToggle}
				onBlur={handleDropdownClose}
				src={avatar}
				style={{
					width: "3rem",
					textAlign: "center",
					cursor: "pointer",
				}}
				alt="true"
			/>
			<Dropdown
				show={isDropdownOpen}
				autoClose={"inside"}
				onClose={handleDropdownClose}
			>
				<Dropdown.Menu className="dropDownMenu">
					<Dropdown.Item>
						{" "}
						<img src={profile} alt="" />
						Profile
					</Dropdown.Item>

					<Link className="dropdown-item" to={"/library"}>
						<img src={library} alt="" />
						Library
					</Link>
					<Link className="dropdown-item" to={'/favarticles'}>
						{" "}
						<img src={stories} alt="" />
						Stories
					</Link>
					<Dropdown.Item>
						{" "}
						<img src={stat} alt="" />
						Statistics
					</Dropdown.Item>
					<hr />
					<Dropdown.Item>Settings</Dropdown.Item>
					<Dropdown.Item>Redefine Recommendations</Dropdown.Item>
					<Dropdown.Item>Manage Publications</Dropdown.Item>
					<Dropdown.Item>Help</Dropdown.Item>
					<hr />
					<Dropdown.Item>Become and exclusive member</Dropdown.Item>
					<Dropdown.Item>Online Community</Dropdown.Item>
					<Dropdown.Item>Online Partner Program</Dropdown.Item>
					<hr />
					<Dropdown.Item>Sign out</Dropdown.Item>
					<Dropdown.Item></Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default NonButtonDropdown;
