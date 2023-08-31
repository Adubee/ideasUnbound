import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";

import UserPage from "./Components/UserPage";
import FavArticles from "./Components/FavArticles";
import Library from "./Components/Library";
import PublishPage from "./Components/PublishPage";
import PublishPagePreview from "./Components/PublishPagePreview";
import SignIn from "./Components/SignIn";
import SignInContinue from "./Components/SignInContinue";
import HomePage from "./Components/HomePage";



function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage/>}/>
			<Route path="signin" element={<SignIn/>} />
			<Route path="signincontinue" element={<SignInContinue/>} />
			<Route path="userpage" element={<UserPage/>} />
			<Route path="favarticles" element={<FavArticles/>} />
			<Route path="library" element={<Library/>} > </Route>
			<Route path="publishpage" element={<PublishPage/>} />
			<Route path="publishpagepreview" element={<PublishPagePreview/>} />
		</Routes>
	);
}

export default App;
