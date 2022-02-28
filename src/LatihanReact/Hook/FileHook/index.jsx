import { useEffect, useState } from "react";
import $ from "jquery";
import "./css/index.css"

const FileHook = () => {
  let [article, setArticles] = useState([]);
  
  useEffect(() => {

    $(".klik").click((e) => {
        e.preventDefault()
  
let input = $("input").val();

    fetch(`https://newsapi.org/v2/top-headlines?q=${input}&country=id&apiKey=a4c6db0fc6814847adf5743f510599a6`)
    .then(response => response.json())
    .then((data) => {
        setArticles(data.articles)
        console.log(article)
  
    })

})
  

  },[])

    return(
        <div>
           
            <div className="header bg-success text-white" ><h4>React Class News</h4><a className="a" href="">Home</a></div>
                    <form autoComplete="off">
                        <input type="text" className="form-control input"  placeholder="Search news..." id="search"/>
                        <button className="btn btn-primary klik" type="submit" id="submit">Search</button>
                        
                    </form>
            
            <div className="row" >
                        
                        {
                        article.map((articles, i) => {
                        return(
                <div key={i}  className="col-md-3 col-sm-6 " >
                    <div className="card "  >
                        <img src= {articles.urlToImage} className="card-img-top" alt="..." />
                            <div className="card-body"  >
                                <h5 className="card-title title"><a href={articles.url} > {articles.title} </a></h5>
                                <small className="text-muted"> {articles.publishedAt} </small>
                                <p className="card-text"> {articles.description}</p>
                            </div>
                    </div>
                </div>
               
           )  
           })
           
           }
     

            </div>
        </div>
    )
}

export default FileHook;
  