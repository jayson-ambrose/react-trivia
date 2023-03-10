import React, { useState, useEffect, useRef } from "react";
import TriviaGame from "./TriviaGame";
import TriviaNight from "./TriviaNight";
import Collections from "./Collections";
import ProfileSelect from "./ProfileSelect.js";
import { Switch, Route, Link } from "react-router-dom";
import PlaySound from "./PlaySound.js";
import mouseClick from "../audio/MouseClick.mp3";
import audio from "../audio/gameMusic.mp3";

function App() {
  const profileURL = "http://localhost:3001/profiles";

  const [profiles, setProfiles] = useState([]);
  const [playing, setPlaying] = useState(false);
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
    if (name === null || name === "") {
      alert("invalid name");
      return;
    }

    const newUser = {
      username: name,
      collections: [],
    };

    fetch(profileURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((resp) => resp.json())
      .then((data) => setProfiles([...profiles, data]));
  };

  const welcomeBtn = document.getElementById("welcomeBtn");
  const welcomeMsg = document.getElementById("welcomeMsg");
  const wrapper = document.getElementById("wrapper");
  const mainContent = document.getElementById("mainContent");

  const mouseClickEffect = useRef(new Audio(mouseClick));
  const audioRef = useRef(new Audio(audio));

  const play = () => {
    setPlaying(true);
    audioRef.current.play();
    audioRef.volume = 0.025;
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };

  const showContent = () => {
    playing
      ? mouseClickEffect.current.play()
      : mouseClickEffect.current.pause();

    welcomeBtn.classList.add("opacity-0", "d-none");
    welcomeMsg.classList.add("opacity-0", "d-none");
    wrapper.classList.add("mh-0");
    mainContent.classList.remove("d-none");
  };

  return (
    <div className="App">
      <PlaySound play={play} pause={pause} playing={playing} />
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
          WELCOME TO ZEN TRIVIA
        </a>
        <h5 id="welcomeMsg" className="mt-5 pt-5 fw-lighter welcomeMsg">
          by: Jayson Ambrose & Christian Hernandez
        </h5>
      </div>

      <div id="mainContent" className="d-none">
        <nav className="m-3">
          <ul
            className="list-unstyled d-flex justify-content-center text-center"
            style={{ marginBottom: "0px" }}
          >
            <li className="border-0 mx-5 px-5">
              <Link to="/TriviaGame">
                <p href="">Trivia Game</p>
              </Link>
            </li>
            <li className="border-0 mx-5 px-5">
              <Link to="/TriviaNightTool">
                <p href="">Trivia Night Tools</p>
              </Link>
            </li>
            <li className="border-0 mx-5 px-5">
              <Link to="/Collections">
                <p href="">Collections</p>
              </Link>
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
            <TriviaGame
              activeProfile={activeProfile}
              profileURL={profileURL}
              playing={playing}
              mouseClickEffect={mouseClickEffect}
            />
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
