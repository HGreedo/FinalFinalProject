
import API from "../utils/API";
import React, { useContext, useState } from 'react';
import UserContext from "../utils/UserContext";

function Logout() { const [formPromp, logoutSubmission] = useState({})



const brandData = useContext(UserContext);
  
const logout = (submit) => {
    const {name, value } = submit.target;
        logoutSubmission({...formPromp, [name]: value})
};

function brandLogout(submit) {
        submit.preventDefault();
        API.brandLogout({
            logoutButton: formPromp.logoutBTn
        })
        .then(res => {
            if (res.data.loggedin === true) {
                const id = res.data.id
                brandData.onUpdate("/api/brands/logout"+id)
                localStorage.clear('id', res.data.id)
            }
        })
    };
    return(
        <div>
            <form>
                <br/>
                <br/>
                <h4>Had enough for today?</h4>
            <button onChange={logout} className="form-button" name="logoutBTn" type="submit" onClick={brandLogout}>Logout</button>
            </form>
            
        </div>
    )
    
    
};

export default Logout;