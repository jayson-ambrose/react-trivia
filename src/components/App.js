import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import ProfileSelect from "./ProfileSelect.js";

function App() {
  const profileURL = "http://localhost:3001/profiles";

  const [profiles, setProfiles] = useState([]);
  const [activeProfile, setActiveProfile] = useState({
    id: 0,
    username: "",
    collections: [
      {
        question: "",
        correct_answer: "",
        incorrect_answers: [""],
      },
    ],
  });
  useEffect(() => {
    fetch(profileURL)
      .then((resp) => resp.json())
      .then((data) => setProfiles(data));
  }, []);

  const handleSelectProfile = (event) => {
    const profileToSelect = profiles.find(
      (profile) => profile.id == event.target.value
    );
    console.log(event.target.value);
    setActiveProfile(profileToSelect);
  };

  if (activeProfile === activeProfile) {
  }

  return (
    <div className="App">
      <ProfileSelect
        handleSelectProfile={handleSelectProfile}
        profiles={profiles}
        activeProfile={activeProfile}
      />
      <hr />
      <NavBar activeProfile={activeProfile} />
    </div>
  );
}

export default App;
