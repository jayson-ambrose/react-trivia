import React, {useState} from "react";
import NavBar from "./NavBar";
import ProfileSelect from "./ProfileSelect.js"

function App() {

  const profileURL = "http://localhost:3001/profiles"

  const [profile, setProfile] = useState({})

  fetch(profileURL)
  .then(resp => resp.json())
  .then(data => console.log(data))

  return (
    <div className="App">

      <ProfileSelect profile={profile}/>
      <br/>
      <NavBar />
      
    </div>
  );
}

export default App;
