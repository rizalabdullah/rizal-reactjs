import React from "react";
import $ from "jquery";
import { click } from "@testing-library/user-event/dist/click";

class ClassComponent extends React.Component{
	state = {
		value: 0
	}

	handleMinus = () => {
		if(this.state.value > 0){
		this.setState({value: this.state.value - 1});
	}
	}

	componentDidMount(){
		$(".klik").click(function(){
			console.log($(".input").val())
		})
		
		
	}
	handlePlus = () => {
		this.setState({value: this.state.value + 1});
	}

	render(){
		return(
			<div>
             <h1> Membuat komponen dengan class komponen </h1>
             <h2>Hello  {this.props.nama}</h2>
             <button onClick={this.handleMinus}>-</button>
             <span> {this.state.value} </span>
              <button onClick={this.handlePlus}>+</button> <br />
			  <form>
			  <input type="text" className="input"  defaultValue="rizal"/>
				<button className="klik" type="submit">klik</button>
			  </form>
			  
			</div>

		)
	}
}

export default ClassComponent;