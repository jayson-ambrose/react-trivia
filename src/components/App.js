import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import ProfileSelect from "./ProfileSelect.js"

function App() {

  const profileURL = "http://localhost:3001/profiles"

  const [profiles, setProfiles] = useState([])
  const [activeProfile, setActiveProfile] = useState({
    id:0,
    username:"",
    collections: []
  })

  useEffect(() => {
    fetch(profileURL)
    .then(resp => resp.json())
    .then(data => setProfiles(data))
  }, [])  

  const handleSelectProfile = (event) => {
    if(event.target.value == 0) {
      return}      
    const profileToSelect = profiles.find((profile) => profile.id == event.target.value)
    setActiveProfile(profileToSelect)
  }

  console.log(activeProfile)

  return (
    <div className="App">
      
      <ProfileSelect handleSelectProfile={handleSelectProfile} profiles={profiles} activeProfile={activeProfile}/>
      <hr/>
      <NavBar activeProfile={activeProfile}/>      

    </div>
  );
}

export default App;
