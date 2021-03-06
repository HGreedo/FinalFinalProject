import React from "react";
import { Link } from 'react-router-dom';
import UserContext from "../../utils/UserContext";
import ('./nav.css')

// const ifLoggedin = function (e) {
// if { loggedin === 'true'} return logout button
//} else if { loggedIn === 'false } return login button
//always have sign-up as an option. 

const Nav = () => {
    console.log(UserContext.brandData);
    return (
      <nav className="navbar">
    <Link className="navbarData" to="/">Home</Link>
    <Link className="navbarData" to="/api/brandindex/profile">Profile</Link>
    <Link className="navbarData" to="/api/brands">Full index</Link>
    <Link className="navbarData" to="/api/brands/login">Login</Link>
    <Link className="navbarData" to="/api/brands/sign-up">Sign Up</Link>
    <Link className="navbarData" to="/api/brands/logout">Logout</Link>
      </nav>
    );
  };
  
  export default Nav;