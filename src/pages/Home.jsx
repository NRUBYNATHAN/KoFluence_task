import { useNavigate } from "react-router-dom";
import "./Home.css"
import Button from '@mui/material/Button';
function Home() {
    const navigate=useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));
    const handleLogout=()=>{
        localStorage.removeItem("login");
        navigate("/login")
    }
  return (
  
   
    <div className="home">
  
    <div className="home_compo">
    <p className="home_head">welcome to user details page</p>
      <p className="mega"><span className="home_det">Name : </span>{userName.name}</p>
      <p  className="mega"><span className="home_det">E-mail : </span>{userName.email}</p>
      <Button variant="contained" onClick={handleLogout} type="button">logout</Button>
    </div>
    </div>
   
  )
}

export default Home
