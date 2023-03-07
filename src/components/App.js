import React, {useState, useEffect} from "react";
import TriviaGame from "./TriviaGame";
import TriviaNight from "./TriviaNight";
import Collections from "./Collections";
import ProfileSelect from "./ProfileSelect.js"
import {Switch, Route} from "react-router-dom"
import {Link} from "react-router-dom"


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

  return (
    <div className="App">
      
      <ProfileSelect handleSelectProfile={handleSelectProfile} profiles={profiles} activeProfile={activeProfile}/>

      <nav>
        <Link  to="/TriviaGame"><button> Trivia Game </button></Link>
        <Link  to="/TriviaNightTool"><button> Trivia Night Tools </button></Link>
        <Link  to="/Collections"><button> Collections </button></Link>
      </nav>

      <hr/>

      <Switch>

        <Route exact path="/TriviaGame">
        <TriviaGame activeProfile={activeProfile}/>
        </Route>

        <Route exact path="/TriviaNightTool">
        <TriviaNight activeProfile={activeProfile}/>  
        </Route>

        <Route exact path="/Collections">
        <Collections activeProfile={activeProfile}/> 
        </Route>

      </Switch>

    </div>
  );
}

export default App;
