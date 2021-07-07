//create a sign-in form that matches email and password
import React, { useContext, useState } from 'react';
import BRANDAPI from '../../utils/API';
import UserContext from "../../utils/UserContext";
import "./signin.css"

function SignIn() { const [formPromp, formSubmission] = useState({})

const brandData = useContext(UserContext);

function form(submit) {
        const {name, value } = submit.target;
        formSubmission({...formPromp, [name]: value})
    };
    
function formSubmit(submit) {
        submit.preventDefault();
        BRANDAPI.brandLogin({
            name: formPromp.name,
            password: formPromp.password
        })
        .then(res => {
            if (res.data.loggedin === true) {
                const id = res.data.id
                brandData.onUpdate('api/brandLogin'+id)
                console.log(res.data)
                localStorage.setItem('id', res.data.id)
            }
            window.location.replace('/api/brandindex/profile')
        })
    };
    return(
        <div className="sign-in">
             <h4 className="header">Please Enter Your Login Details to Explore OFBC</h4>
            <form className="signin-form">
            <input onChange={form} type="text" name="name" placeholder="name" />
            <input className="password" onChange={form} name="password" type="password" placeholder="password"/>
            <br />
            <button className="form-button" type="submit" onClick={formSubmit}>Take Me There!</button>
            </form>
        </div>
    )
    
    
}
export default SignIn;