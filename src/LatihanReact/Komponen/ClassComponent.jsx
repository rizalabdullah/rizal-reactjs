import React from "react";
import $ from "jquery";
import { click } from "@testing-library/user-event/dist/click";

const Article = ({data1}) => {
    return(
        <ul>
           
                {
                data1.map((data11, key) => {
                return(
                   <li key={key}>{data11.title}</li>
   
      
                    
                )  
                })
                
                }
          

        </ul>
    )
}

class ClassComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		  data1: [],
		  isLoaded: false
	  } ;
	  }
	  
	   
	componentDidMount(){
	   
	  
	
	
		fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=a4c6db0fc6814847adf5743f510599a6`)
		.then(response => response.json())
	   .then((data) => {
		  this.setState({
			  isLoaded: true,
			  data1: data.articles
			})
		  console.log(data.articles)
	  
			
	 
	   
		})
	
	
	}
		render(){
			   
			return(
				<div>
				dfdf
				
				
				{<Article data1={this.state.data1} />}
				 
	
				</div>
			)
			
		}
	}

export default ClassComponent;