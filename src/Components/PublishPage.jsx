import React, { useEffect } from "react";
import NavBarPublish from "./NavBarPublish";

function PublishPage() {
	useEffect(() => {
		const textArea = document.getElementById("textarea");
		textArea.addEventListener("input", handleInput);

		return () => {
			textArea.removeEventListener("input", handleInput);
		};
	}, []);
	
	useEffect(() => {
		const textArea = document.getElementById("textareaSmall");
		textArea.addEventListener("input", handleInput2);

		return () => {
			textArea.removeEventListener("input", handleInput2);
		};
	}, []);



	const handleInput = () => {
		const textArea = document.getElementById("textarea");
		console.log(textArea);
    textArea.style.height = 'auto'
    textArea.style.height = textArea.scrollHeight + 'px'
    console.log(textArea.scrollHeight)
    // console.log("Hi")
		// e.style.height = 'auto'
		// e.style.height = e.scrollHeight + 'px'
	};


	const handleInput2 = () => {
		const textArea = document.getElementById("textareaSmall");
		console.log(textArea);
    textArea.style.height = 'auto'
    textArea.style.height = textArea.scrollHeight + 'px'
    console.log(textArea.scrollHeight)
	}

	return (
		<div>
			<NavBarPublish />
			<div className="publishContainer">
				<textarea
					placeholder="Title"
					name="message"
					id="textarea"
					cols="90"
					rows="1"
				></textarea>
				<textarea
					placeholder="Write your story..."
					name="message"
					id="textareaSmall"
					cols="90"
					rows="1"
				></textarea>
			</div>
		</div>
	);
}

export default PublishPage;
