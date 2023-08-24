

import { useState } from "react"
import { useNavigate,Link } from "react-router-dom";
import "./Login.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Login() {

const navigate=useNavigate();
    const[input,setInput]=useState({
       
        email:"",
        password:"",
      


    })
const handleLogin=(e)=>{
e.preventDefault();
const loggedUser=JSON.parse(localStorage.getItem("user"));
if(input.email===loggedUser.email && input.password === loggedUser.password){
    localStorage.setItem("login",true)
    navigate("/")
}else{
    alert("Wrong User Credentials")
}
}

  return (
    <div className="login">
      <form className="login_form" onSubmit={handleLogin}>
   

        <div className="field">
        <p className="heading">Email</p>
        <TextField
        type="email"
         name="email"
         value={input.email}
         onChange={(e)=>setInput({...input,[e.target.name] : e.target.value,})}
          

         id="outlined-basic" label="type your email" variant="outlined" />
        
        </div>

        <div className="field">
        <p className="heading">Password</p>
        <TextField
       
          name="password"
          value={input.password}
          onChange={(e)=>setInput({...input,[e.target.name] : e.target.value,})}
          type="password"

         id="outlined-basic" label="type your password" variant="outlined" />
       
        </div>


<div className="btn">
    <Button  variant="contained" type="submit">Login Here</Button>
</div>
<div className="text">
    <p>Dont have an account? 
        <Link to='/register'>
            <u className="re"> Register Here</u>
        </Link>
    </p>
</div>
      </form>
    </div>
  )
}

export default Login
