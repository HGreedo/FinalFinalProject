//create a sign-in form that matches email and password
import React, { useContext, useState } from 'react';
import API from '../utils/API';
import UserContext from "../utils/UserContext";
import "./SignIn/signin.css"

function SignIn() { const [formPromp, formSubmission] = useState({})

const brandData = useContext(UserContext);
function form(submit) {
        const {name, value } = submit.target;
        formSubmission({...formPromp, [name]: value})
    };
    
function formSubmit(submit) {
        submit.preventDefault();
        API.brandLogin({
            name: formPromp.name,
            passowrd: formPromp.password
        })
        .then(res => {
            if (res.data.loggedin === true) {
                brandData.onUpdate(res.data)
            }
        })
    };
    return(
        <div className="sign-in">
            <form className="form">
                <h4>Please Enter Your Login Details to Explore OFBC</h4>
            <input onChange={form} type="text" name="name" placeholder="name" />
            <input onChange={form} type="password" name="password" placeholder="password"/>
            <br/>
            <button type="submit" onClick={formSubmit}>Take Me There!</button>
            </form>
        </div>
    )
    
    
}
export default SignIn;