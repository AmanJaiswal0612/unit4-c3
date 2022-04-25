import react, { useContext } from "react";
import { Routes, Route,Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { About } from "../pages/About";
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { SingleBook } from "../pages/SingleBook";
import { RequiredAuth } from "./RequiredAuth";


const Mainroutes = () => {
  const {token}=useContext(AuthContext)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/logout"} element={<Logout/>}/>
        <Route path={"/books/*"} element={token?<Books/>:<><h3>Please <Link to = "/login">login</Link> to access this page</h3></>}/>
        <Route path="/books/:id" element={token?<SingleBook/>:<><h3>Please <Link to = "/login">login</Link> to access this page</h3></>}/>
        <Route path="/books/:id/edit" element={<EditBookData/>}/>
       {/* keep all the routes here  */}
       {/* /books/* route need to be protected */}
      </Routes>
    </>
  );
};
export default Mainroutes;
