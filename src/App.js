import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routing from "./Routing";
import Form from "./LatihanReact/Form";
import LatihanReact from "./LatihanReact";
import Portofolio from "./LatihanReact/Portofolio";

function App() {
  return (
    <div className="App">
    

     <Router >
           
           <Routes>
               <Route path="/"  element={ <Routing />}  >
                  
                  <Route path="/"  element={ <LatihanReact />} />
                  <Route path="/Form"  element={ <Form />} />
                  
               </Route>
              
                  <Route path="/Portofolio"  element={ <Portofolio/>} />

    
           </Routes>
       </Router>
     
     
    </div>
  );
}

export default App;
