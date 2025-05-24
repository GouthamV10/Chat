import { Route, Routes } from "react-router";
import "./App.css";
import Authentication from "./view/Authentication";
import Home from "./view/Home";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Authentication />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
