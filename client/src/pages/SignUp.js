//create a sign-up form that extends all the info required tp sign-up

import React, { useState, useEffect } from 'react';
import API from '../utils/API';


function SignUp() { 
    const [ brands, setBrands] = useState({})
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadBrands()
      }, [brands])

    function loadBrands() {
        API.getBrands()
          .then(res => 
            setBrands(res.data)
          )
          .catch(err => console.log(err));
      };
    

function handleInputChange(submit) {
    const {name, value } = submit.target;
    setFormObject({...formObject, [name]: value})
};



  //import FormBtn 

function handleFormSubmit(submit) {
    submit.preventDefault();
    if (formObject.name && formObject.password) {
    API.saveBrand({
    name: formObject.name,
    address: formObject.address,
    website: formObject.website,
    description: formObject.description,
    email: formObject.email,
    password: formObject.password
    })
    .then(res => loadBrands())
        .catch(err => console.log(err));
        console.log(handleFormSubmit);
     }

};
return(
    <div>
        <form>
            <input onChange={handleInputChange} type="text" placeholder = "Name" name = "name" />
            <input onChange={handleInputChange} type="text" placeholder = "Address" name = "address" />
            <input onChange={handleInputChange} type="text" placeholder = "website URL" name = "website" />
            <input onChange={handleInputChange} type="text" placeholder = "Brief Description" name = "description" />
            <input onChange={handleInputChange} type="email" placeholder = "Email" name = "email" />
            <input onChange={handleInputChange} type="password" placeholder = "Password" name = "password" />
            <button
                onClick={handleFormSubmit}
              >
                Submit Brand
              </button>
        </form>
    </div>
    );

}

export default SignUp;