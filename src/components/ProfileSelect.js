import React from 'react'

function ProfileSelect ({ profiles, handleSelectProfile, activeProfile }) {

    const profileList = profiles.map((profile) => <option key={profile.id} value={profile.id}>{profile.username}</option>)
       
    return (

        <div>
            <p>{activeProfile.username}</p>
            <select onChange={handleSelectProfile}>
                <option value="0">Select Profile...</option>
                {profileList}
            </select>
        </div>
    )
}

export default ProfileSelect;