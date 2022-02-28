import React from "react";
import { Outlet, Link } from "react-router-dom";

class Home extends React.Component{
   
    render() {
        return (
            <>
            <nav style={{width:"100%",height:"40px",background:"red"}}>
              <ul>
                <li style={{float:"left"}}>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blo">Blogs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

          
      
            <Outlet />
          </>
        );
    }
}

export default Home;