import React from "react";

class Perulangan extends React.Component{
    state ={
        arrays:[`1`,`2`]
    }
    render(){
        let arrays =[`1`,`2`];
        return(
            <div>
           
                     {
                         this.state.arrays.map((array, i) => {
                         return ( 
                                <div key={i} > {array} </div>
                                 )
                         })
                     }
                
              
            </div>
        )
    }
}

export default Perulangan;