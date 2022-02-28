import { Outlet, Link } from "react-router-dom";

const Blogs = () => {
    return ( <>
    <h1>Blog Articles</h1>
    <button><Link to="/"> data Profile</Link></button>
    <Outlet />
    </> )
  };
  
  export default Blogs;