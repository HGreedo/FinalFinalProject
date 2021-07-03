//create a sign-up form that extends all the info required tp sign-up

import React, { useState } from 'react'
import API from '../utils/API';

function SignUp() { const [formPromp, formSubmission] = useState({})

function newSubmission(submit) {
    const {name, value } = submit.target;
    formSubmission({...formPromp, [name]: value})
};

function FormSubmit(submit) {
    submit.preventDefault();
    
    API.saveBrand({
    name: formPromp.name,
    address: formPromp.address,
    website: formPromp.website,
    description: formPromp.description,
    email: formPromp.email,
    password: formPromp.password
    })
};
return(
    <div>
        <form>
            <input onChange={newSubmission} type="text" placeholder = "Name" name = "name" />
            <input onChange={newSubmission} type="text" placeholder = "Address" name = "address" />
            <input onChange={newSubmission} type="text" placeholder = "website URL" name = "website" />
            <input onChange={newSubmission} type="text" placeholder = "Brief Description" name = "description" />
            <input onChange={newSubmission} type="email" placeholder = "Email" name = "email" />
            <input onChange={newSubmission} type="password" placeholder = "Password" name = "password" />
            <button type="submit" onClick={FormSubmit}>submit</button>
        </form>
    </div>
)
}
export default SignUp;