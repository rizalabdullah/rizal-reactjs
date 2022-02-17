import React from "react";
import ClassComponent from "./Komponen/ClassComponent.jsx";
import FunctionalComponent from  "./Komponen/FunctionalComponent.jsx"; 

class LatihanReact extends React.Component{
	render(){
		return(
                <div>
                <ClassComponent nama="rizal"/>
                <FunctionalComponent nama="rizal"/>
               
                </div>
		)
	}
}

export default LatihanReact;