import React from "react";
import $ from "jquery";
import Article from "./Article";
import "./css/index.css";


class FilePB extends React.Component{
state ={
    article: []
}    
   
componentDidMount(){
   
  
       
    fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=a4c6db0fc6814847adf5743f510599a6`)
  .then(response => response.json())
  .then((data) => {
      this.setState({article: data.articles})

  
        
 
   
    })


}
    render(){
        return(
            <div>
                <div className="header bg-success text-white" ><h4>React Class News</h4><a className="a" href="">Home</a></div>
                    <form autoComplete="off">
                        <input type="text" className="form-control input"  placeholder="Search news..." id="search"/>
                        <button className="btn btn-primary klik" type="submit" id="submit">Search</button>
                        
                    </form>
                   { this.state.article && < Article article={this.state.article} /> }
             

            </div>
        )
    }
}

export default FilePB;