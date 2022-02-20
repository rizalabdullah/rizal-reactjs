import React from "react";
import ShowErrors from "./ShowErrors";

const Input = ({name, type, onChange}) => {
    return(
        <div>
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
       </div>
    )
}

class Validation extends React.Component{
    state ={
        email:``,
        password:``,
        errors:[]

    }
    handleSubmit = (e) =>{
        e.preventDefault();
    
      const {email, password} = this.state;
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      let message = []; 
      
        if(email.length == 0){
           message = [...message, `Email tidak boleh kosong`];
        }
        if(!re.test(String(email).toLowerCase()) ){
            message = [...message, `Email tidak valid`];
        }
        if(password.length == 0){
            message = [...message, `Password tidak boleh kosong`];
        }
        if(password.length < 9){
            message = [...message, `Password minimal 8 digit`];
        }
        if(message.length > 0){
            this.setState({
                errors: message
            },() => console.log(this.state.errors))
           
        }
       else{
           alert(`
               Email : ${this.state.email}
               Password : ${this.state.password}
           `)
           this.setState({
               errors:[]
           })
       }
    }

    render(){
        let style ={
           border:`solid 1px black`,
            width:`400px`,
            padding:`1px`,
            margin:`15% auto`

        }
        return(
            <div style={style}>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    {
                        this.state.errors && <ShowErrors errors={this.state.errors} />
                    }
                    <h4 className="text-center">Login Page</h4>
                   
                        <label>Email</label> <br />
                            <Input type="email" name="email" onChange={(value) => {
                                this.setState({email:value})}
                            }/> 
                        <label>Password</label> <br />
                            <Input type="text" name="password"  onChange={(value) => {
                                this.setState({password:value})}
                            }/> <br />
                        <button type="submit" >Login </button>
                  
                 </form>
            </div>
        )
    }
}

export default Validation;