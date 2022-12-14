import { BrowserRouter , Switch, Route } from "react-router-dom";
//import { Link } from "react-router-dom";
import Routing from "../../Routing";

const FunctionalComponent = ({nama}) => {

	return(

		
	                  
				<div>
					<Routing/>
				<h1>Membuat komponen dengan functional komponen</h1>
				<h2>Hello {nama}</h2>
				</div>
				

		 
	)
}

export default FunctionalComponent;