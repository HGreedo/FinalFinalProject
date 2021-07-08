import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../../utils/UserContext";
import BRANDAPI from "../../utils/API";
import ("./profile.css")





function Profile() {
    const [brandData, setBrand] = useState({})
    const {name, id} = useContext(userContext)

    useEffect(() => { 
        BRANDAPI.getBrandById(brandData.id)
        .then(res => setBrand(res.id))
    .catch(err => console.log(err));
},)

console.log(BRANDAPI.getBrandById(id));

    return (
        <div className="profile-card">
            <div className="name" >
                Name: {name} {id}
            </div>
            <div className="profile-website">
                Website: 
            </div>
            <div className="profile-description">
                Description: 
            </div>
            <div className="profile-email">
                Email: 
            </div>
            <br/>
            <div className="update-card">
                <Link className="button" to="UpdateProfile">Click Here to update Your Profile</Link>
            </div>
        </div>
    );
}
export default Profile;