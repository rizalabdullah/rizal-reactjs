import "./css/index.css";

const Article = ({article}) => {
    return(
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
    )
}

export default Article;
