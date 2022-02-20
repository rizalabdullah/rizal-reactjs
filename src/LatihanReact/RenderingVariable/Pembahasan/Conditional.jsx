import React from "react";

class Conditional extends React.Component{
    render(){
        const nilai = 80;
        let grade ="";
        let hasil =""; 
        if(nilai >= 80){
            grade ="A"; {
                hasil ="lulus"; 
            }
        }
        else{
            grade="tidak ada";
        }
        return(
            <div>
                    <h1>{grade} {hasil}</h1>
                    <h2>{nilai > 40 ? grade="C": grade="gagal"}</h2>
            </div>
        )
    }
}

export default Conditional;