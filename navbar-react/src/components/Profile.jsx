import React from 'react';
import './Profile.css';
function Profile(prop){
    
    return (
        <div className='profileDiv'>
        <h1>{prop.name}</h1>
        </div>
    )
}
export default Profile;