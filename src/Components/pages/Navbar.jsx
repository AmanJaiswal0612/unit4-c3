import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Logout } from "./Logout";



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav style={{display:"flex", gap:"300px",border:"1px solid black",background:"pink",padding:"30px"}}>
        {/* keep all the NavLinks here */}
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={token?"/logout":"/login"}>{token?"Logout":"Login"}</NavLink>
        <NavLink to={'/books'}>Books</NavLink>
      </nav>
    </>
  );
};
