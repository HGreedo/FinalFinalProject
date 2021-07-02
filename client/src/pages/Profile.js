import React, { useContext } from "react";
import userContext from "../utils/UserContext";

function UserInfo() {

    const [{name, website, description, email}] = useContext(userContext);


    return (
        <div className="profile-card">
            <div>
                Name: {name}
            </div>
            <div>
                Website: {website}
            </div>
            <div>
                Description: {description}
            </div>
            <div>
                Email: {email}
            </div>
        </div>
    );
}
export default UserInfo;