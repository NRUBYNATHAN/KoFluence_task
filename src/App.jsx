
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoutes from "./services/ProtectedRoutes";
import "./App.css"
function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
     
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<ProtectedRoutes/>}>
      <Route path="/" element={<Home/>}/>
      </Route>
     
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
