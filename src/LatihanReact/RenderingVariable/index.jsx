import React from "react";
import Conditional from "./Pembahasan/Conditional.jsx";
import Perulangan from "./Pembahasan/Perulangan.jsx";

class RenderingVariable extends React.Component{
    render(){
        return(
            <div>
                <Conditional />
                <Perulangan />
            </div>
        )
    }
}

export default RenderingVariable;