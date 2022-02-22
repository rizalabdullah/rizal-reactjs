import React from "react";
import $ from "jquery";
import { click } from "@testing-library/user-event/dist/click";


class ClassComponent extends React.Component{
 constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=a4c6db0fc6814847adf5743f510599a6")
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            items: data.articles
			
          });
		  console.log(data.articles)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const {items } = this.state;
  
      return (
        <ul>
          {items.map((item,i) => {
        return(    <li key={i}>
              {item.title}
            </li> )
          })
		 
		
		} 
        </ul>   
      );
   
  }
}

export default ClassComponent;