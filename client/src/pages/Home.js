//create a homepage that has links to Sign-up/Sign-in/Data-index/Profile
import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import * as API from "../utils/API";
import UserInfo from "./Profile";
import UserContext from "../utils/UserContext";
import Footer from "../components/Footer";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import DataIndex from "./DataIndex";

function App(){
    const [userState, setUserState ] = useState({
        name: "",
        password: "",

    });

    function goToIndex(submit) {
    const 
        return (
            <button href={null} onClick={() => this.props.history.push('/') }></button>
        )
    }

function goToSignIn(submit) {
    if (user !== loggedin) {
        return SignIn
    } else {
        return SignUp
    }
}

function displayFooter() {
    return (
        <div>
            <script src = "Footer"></script>
        </div>
    );
}
}