import React from "react";

function ProfileSelect({ profiles, handleSelectProfile, activeProfile }) {
  console.log(activeProfile.id);
  const profileList = profiles.map((profile) => (
    <option key={profile.id} value={profile.id}>
      {profile.username}
    </option>
  ));

  const hideDefaultValue = activeProfile.id === 0 ? "opacity-0" : "opacity-100";

  return (
    <div>
      <p className={hideDefaultValue}>{activeProfile.username}</p>
      <select onChange={handleSelectProfile}>{profileList}</select>
    </div>
  );
}

export default ProfileSelect;
