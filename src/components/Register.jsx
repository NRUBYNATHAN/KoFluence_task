import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./Register.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Register() {
const navigate=useNavigate();

    const[input,setInput]=useState({
        name:"",
        email:"",
        password:"",
        number:"",
        age:"",
        address:"",
        gender:"",
        occupation:""


    })

    const handleSubmit = (e)=>{
      e.preventDefault();
      localStorage.setItem("user",JSON.stringify(input));
      navigate("/login")

    }
  return (
    <div className="register">
      <form className="register_form" onSubmit={handleSubmit}>
        <div  className="reg_field">
        <p className="reg_head">Name</p>
        <TextField
        name="name"
        value={input.name}
        onChange={(e)=>setInput({...input,[e.target.name] : e.target.value,})}
         id="namefield" type="text" label="type your name" variant="outlined"/>
        </div>

        <div  className="reg_field">
        <p className="reg_head">Email</p>
        <TextField
        name="email"
        value={input.email}
        onChange={(e)=>setInput({...input,[e.target.name] : e.target.value,})}
         id="emailfield"  type="email" label="type your name" variant="outlined"/>
        </div>

        <div  className="reg_field">
        <p className="reg_head">Password</p>
        <TextField 
        name="password"
        value={input.password}
        onChange={(e)=>setInput({...input,[e.target.name] : e.target.value,})}
        id="passwordfield"  type="password" label="type your name" variant="outlined"/>
        </div>

        <div  className="reg_field">
        <p className="reg_head">Number</p>
        <TextField 
        name="number"
        value={input.number}
        onChange={(e)=>setInput({...input,[e.target.name] : e.target.value,})}
        id="numberfield"  type="text" label="type your name" variant="outlined"/>
        </div>

        <div  className="reg_field">
        <p className="reg_head">Age</p>
        <TextField
        name="age"
        value={input.age}
        onChange={(e)=>setInput({...input,[e.target.name] : e.target.value,})}
         id="agefield"  type="number" label="type your name" variant="outlined"/>
        </div>

        <div  className="reg_field">
        <p className="reg_head">Address</p>
        <TextField 
        name="address"
        value={input.address}
        onChange={(e)=>setInput({...input,[e.target.name] : e.target.value,})}
        id="addressfield"  type="text" label="type your name" variant="outlined"/>
        </div>

        <div  className="reg_field">
        <p className="reg_head">Gender</p>
        <TextField 
        name="gender"
        value={input.gender}
        onChange={(e)=>setInput({...input,[e.target.name] : e.target.value,})}
        id="genderfield"  type="text"  label="type your name" variant="outlined"/>
        </div>

        <div className="reg_field">
        <p className="reg_head">Occupation</p>
        <TextField
        
        name="occupation"
        value={input.occupation}
        onChange={(e)=>setInput({...input,[e.target.name] : e.target.value,})}
         id="occupationfield"  type="text" label="type your name" variant="outlined"/>
        </div>

<div className="reg_btn">
    <Button variant="contained" type="submit">Register Here</Button>
</div>
<p>Have already an account?
    <Link to="/login">
        <u>Login Here</u>
    </Link>
</p>
      </form>
    </div>
  )
}

export default Register
