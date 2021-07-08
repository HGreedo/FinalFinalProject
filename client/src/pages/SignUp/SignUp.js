//create a sign-up form that extends all the info required tp sign-up

import React, { useState } from 'react';
import API from '../../utils/API';
import './signup.css';

function SignUp() { 
    const [formObject, setFormObject] = useState({})

    // useEffect(() => {
    //     loadBrands()
    //   }, [brands])




    function loadBrands() {
        API.getBrands()
          .then(res => 
            setFormObject(res.data)
          )
          .catch(err => console.log(err));
      };
    

function handleInputChange(submit) {
    const {name, value } = submit.target;
    setFormObject({...formObject, [name]: value})
};

function handleFormSubmit(submit) {
    submit.preventDefault();
    if (formObject.name && formObject.password) {
    API.saveBrand({
    name: formObject.name,
    address: formObject.address,
    website: formObject.website,
    description: formObject.description,
    email: formObject.email,
    password: formObject.password,

    //what do i need to do around this id key?
    // id: 


    })
    
    .then(res => loadBrands())
        .catch(err => console.log(err));
        console.log(handleFormSubmit);
     }

};
return(
    <div className="background">
    <div className="sign-up-card">
        <h1 className="signup-header">Please Fill Out Your Details to Enjoy the Full Experience of OFBC</h1>
        <br/>
        <p className="p">Please be sure to fill out all accurate information so that other Brands and Boutiques can accurately connect with you!</p>
        <form className="signup-form">
            <input onChange={handleInputChange} type="text" placeholder = "Name" name = "name" />
            <input onChange={handleInputChange} type="text" placeholder = "Address" name = "address" />
            <input onChange={handleInputChange} type="text" placeholder = "website URL" name = "website" />
            <input onChange={handleInputChange} type="text" placeholder = "Brief Description" name = "description" />
            <input onChange={handleInputChange} type="email" placeholder = "Email" name = "email" />
            <input onChange={handleInputChange} type="password" placeholder = "Password" name = "password" />
            <br/>
            <button className="signup-button"
                onClick={handleFormSubmit}
              >
                Submit Brand
              </button>
        </form>
    </div>
    </div>
    );

}

export default SignUp;