import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import userContext from "../../utils/UserContext";
import API from "../../utils/API";
import ("./profile.css")

function Profile(props) {

    const [brand, setBrand] = useState({})
    const {name} = useContext(userContext);

    const {id} = useParams()
    useEffect(() => { 
        API.getBrandById(id)
        .then(res => setBrand(res.data))
    .catch(err => console.log(err));
}, [id])

    return (
        <div className="profile-card">
            <div className="name">
                Name: {brand.name} {name}
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
            <div>
                <Link className="button" to="/api/brandindex/:id/">Click Here to update Your Profile</Link>
            </div>
        </div>
    );
}
export default Profile;