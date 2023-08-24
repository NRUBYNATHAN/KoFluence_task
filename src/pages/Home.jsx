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
  
   
    <div className="home_compo">
  
    <div className="home">
    <h3 className="home_head">welcome to user details page</h3>
      <p className="mega"><span className="home_det">Name : </span>{userName.name}</p>
      <p  className="mega"><span className="home_det">E-mail : </span>{userName.email}</p>
      <Button variant="contained" onClick={handleLogout} type="button">logout</Button>
    </div>
    </div>
   
  )
}

export default Home
