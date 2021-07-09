import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../../utils/UserContext";
import BRANDAPI from "../../utils/API";
import ("./profile.css")

function Profile() {
    const [brandPromp] = useState({})
    const brandData= useContext(userContext)
   
    // function profileCard(data) {
    //     const {name, value } = data.target;
    //     brandSubmission({...brandPromp, [name]: value})
    // };

    function updateProfileCard(data) {
        data.preventDefault();
        BRANDAPI.getBrandById({
            name: brandPromp.name,
            website: brandPromp.website,
            description: brandPromp.description,
            email: brandPromp.email
        }).then(res => {
            if(res.data.loggedin === true) {
                const id = res.data.id
                brandData.onUpdate('api/brandLogin'+id)
                console.log(res.data)
                localStorage.getItem('brandData', res.data.id)
                console.log(updateProfileCard(data));
            }
        })
    }

//     useEffect(() => { 
//         BRANDAPI.getBrandById(id)
//         .then(res => setBrand(...brandData.id))
//     .catch(err => console.log(err));
// },)


    return (
        
        <div className="profile-card" onChange={updateProfileCard}>
           
            <div className="name">
                Name: {brandData.name}
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