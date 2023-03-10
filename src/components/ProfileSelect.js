import React from "react";

function ProfileSelect({
  profiles,
  handleSelectProfile,
  activeProfile,
  onProfileCreate,
}) {
  const profileList = profiles.map((profile) => (
    <option className="m-3 p-2" key={profile.id} value={profile.id}>
      {profile.username}
    </option>
  ));

  function addProfile() {
    const newUser = prompt("Please enter your name");
    onProfileCreate(newUser);
  }

  const hideDefaultValue =
    activeProfile.id === 0
      ? "opacity-0"
      : "opacity-100 m-0 color-turquoise fw-lighter ms-3 mb-3";

  return (
    <div>
      <div className="d-flex align-items-center">
        <button className="m-3 p-2 createProfileBtn" onClick={addProfile}>
          Create Profile
        </button>
        <select className="ms-0 m-3 p-2" onChange={handleSelectProfile}>
          <option className="m-3 p-2" key="blank" value="0">Select Profile...</option>
          {profileList}
        </select>
      </div>
      <div className="playerName">
        <h4 className={hideDefaultValue}>
          Welcome back, {activeProfile.username}
        </h4>
      </div>
    </div>
  );
}

export default ProfileSelect;
