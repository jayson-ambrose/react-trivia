import React from "react";

function ProfileSelect({ profiles, handleSelectProfile, activeProfile }) {
  console.log(activeProfile.id);
  const profileList = profiles.map((profile) => (
    <option className="m-3 p-2" key={profile.id} value={profile.id}>
      {profile.username}
    </option>
  ));

  const hideDefaultValue =
    activeProfile.id === 0
      ? "opacity-0"
      : "opacity-100 m-0 color-turquoise fw-lighter text-center";

  return (
    <div className="d-flex align-items-center">
      <select className="m-3 p-2" onChange={handleSelectProfile}>
        {profileList}
      </select>
      <h4 className={hideDefaultValue}>
        Welcom back, {activeProfile.username}
      </h4>
    </div>
  );
}

export default ProfileSelect;
