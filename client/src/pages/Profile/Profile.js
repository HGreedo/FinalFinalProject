import React, { useContext } from "react";
import userContext from "../../utils/UserContext";
//import API from "../../utils/API";


function Profile() {

    const {name} = useContext(userContext);


    return (
        <div className="profile-card">
            <div className="profile-name">
                Name: {name}
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
        </div>
    );
}
export default Profile;