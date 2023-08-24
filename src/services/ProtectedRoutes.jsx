
import { Outlet,Navigate } from "react-router-dom"
function ProdectedRoutes() {
    const auth = localStorage.getItem("login");

  return auth ? <Outlet/> : <Navigate to={"/login"}/>
}

export default ProdectedRoutes
