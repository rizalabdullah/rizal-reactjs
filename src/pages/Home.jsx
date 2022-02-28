import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (   <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blo">Blogs</Link>
            </li>
            <li>
              <Link to="/form">Contact</Link>
            </li>
          </ul>
        </nav>

        <h1>Home</h1>
  
        <Outlet />
      </>



   
 
    
    )
  };
  
  export default Home;