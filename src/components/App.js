import React, { useState, useEffect } from "react";
import TriviaGame from "./TriviaGame";
import TriviaNight from "./TriviaNight";
import Collections from "./Collections";
import ProfileSelect from "./ProfileSelect.js";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const profileURL = "http://localhost:3001/profiles";

  const [profiles, setProfiles] = useState([]);
  const [activeProfile, setActiveProfile] = useState({
    id: 0,
    username: "Unknown",
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
    if (event.target.value == 0) {
      return;
    }
    const profileToSelect = profiles.find(
      (profile) => profile.id == event.target.value
    );
    setActiveProfile(profileToSelect);
  };

  const onProfileCreate = (name) => {

    if(name === null || name ==="") {
      alert("invalid name")
      return
    }
    
    const newUser = {
      username: name,
      collections: []
    }

    fetch (profileURL, {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then(resp => resp.json())
    .then(data => setProfiles([...profiles, data]))
  }

  const welcomeBtn = document.getElementById("welcomeBtn");
  const welcomeMsg = document.getElementById("welcomeMsg");
  const wrapper = document.getElementById("wrapper");

  const showContent = () => {
    welcomeBtn.classList.add("opacity-0", "d-none");
    welcomeMsg.classList.add("opacity-0", "d-none");
    wrapper.classList.add("mh-0");
  };

  return (
    <div className="App">
      <div id="wrapper" className="wrapper text-center text-white">
        <a
          onClick={showContent}
          id="welcomeBtn"
          className="welcomeBtn"
          href="#"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          WELCOME TO TRIVIA
        </a>
        <h5 id="welcomeMsg" className="mt-5 pt-5 fw-lighter welcomeMsg">
          by: Jayson Ambrose & Christian Hernandez
        </h5>
      </div>

      <div id="mainContent" className="opacity-100">
        <nav className="m-3">
          <ul
            className="list-unstyled d-flex justify-content-center text-center"
            style={{ marginBottom: "0px" }}
          >
            <li className="border-0 mx-5 px-5">
              <Link to="/TriviaGame">
                <a href="">Trivia Game</a>
              </Link>
            </li>
            <li className="border-0 mx-5 px-5">
              <a>
                <Link to="/TriviaNightTool">
                  <a href="">Trivia Night Tools</a>
                </Link>
              </a>
            </li>
            <li className="border-0 mx-5 px-5">
              <a>
                <Link to="/Collections">
                  <a href="">Collections</a>
                </Link>
              </a>
            </li>
          </ul>
        </nav>

        <hr />

        <ProfileSelect
          handleSelectProfile={handleSelectProfile}
          profiles={profiles}
          activeProfile={activeProfile}
          onProfileCreate={onProfileCreate}
        />

        <Switch>
          <Route exact path="/TriviaGame">
            <TriviaGame activeProfile={activeProfile} profileURL={profileURL} />
          </Route>

          <Route exact path="/TriviaNightTool">
            <TriviaNight activeProfile={activeProfile} />
          </Route>

          <Route exact path="/Collections">
            <Collections activeProfile={activeProfile} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
