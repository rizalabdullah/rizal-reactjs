import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./FilePage/Home";
import About from "./FilePage/About";


class Page extends React.Component{
    render(){
        return(
            
            
            <BrowserRouter>
           
            <Routes>
              
                
                <Route path="/" element={<Home />} >
                <Route path="/contact" element={<About />} />
                
               
              </Route>
            </Routes>
            <About />
          </BrowserRouter>
        )
    }
}

export default Page;