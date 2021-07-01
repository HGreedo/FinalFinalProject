import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import UserContext from "../utils/UserContext";
//import API from '../utils/API';

// const ifLoggedin = function (e) {
// if { loggedin === 'true'} return logout button
//} else if { loggedIn === 'false } return login button
//always have sign-up as an option. 

const Nav = () => {
   
    return (
      <nav className="navbar">
    <Link className="navbarData" to="/">Home</Link>
    <Link className="navbarData" to="/api/brandindex/:id">Profile</Link>
    <Link className="navbarData" to="/api/brands">Full index</Link>
    <Link className="navbarData" to="/api/brands/nameSort">Search</Link>
    <Link className="navbarData" to="/api/brands/login">Login</Link>
    <Link className="navbarData" to="/api/brands/sign-up">Sign Up</Link>
    <Link className="navbarData" to="/api/brands/logout">Logout</Link>
    <h6 className="navbarData">Hey! {userData.name} You are now logged in!</h6>

      </nav>
    );
  };
  
  export default Nav;