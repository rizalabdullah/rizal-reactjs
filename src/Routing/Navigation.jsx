import "./style.css";
import {  Link } from "react-router-dom";

const Navigation = () => {
    return(
        <div className="main">
            
            <div className="sidebar">
  <Link to="/"><i className="fa fa-fw fa-home"></i> Komponen </Link >
  <Link to="/Form"><i className="fa fa-fw fa-atom"></i> Form </Link >
  <Link to="/Portofolio"><i className="fa fa-fw fa-book"></i> Portofolio </Link >
  
</div>

         
          


        </div>
    )
}

export default Navigation;
