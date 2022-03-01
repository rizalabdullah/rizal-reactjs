import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const FunctionalComponent = ({nama}) => {

	return(
		<>
				<div>
				<h1>Membuat komponen dengan functional komponen</h1>
				<h2>Hello {nama}</h2>
				</div>
				

		  <Outlet />
		</>
	)
}

export default FunctionalComponent;