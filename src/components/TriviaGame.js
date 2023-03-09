import React, { useState, useEffect } from "react";
import Trivia from "./Trivia.js";
import Score from "./Score.js";
import Strikes from "./Strikes.js";
import HighScoreSection from "./HighScoreSection.js";

const fetchUrl = "https://opentdb.com/api.php?amount=1";
const highScoreUrl = "http://localhost:3001/high-scores";

function TriviaGame({ activeProfile, mouseClick, playing, mouseClickEffect }) {
  const [questions, setQuestions] = useState([]);
  const [highScores, setHighScores] = useState([]);
  const [score, setScore] = useState(0);
  const [strikes, setStrikes] = useState(0);

  useEffect(() => {
    fetch(highScoreUrl)
      .then((resp) => resp.json())
      .then((data) => setHighScores(data));
  }, []);

  const fetchQuery = () => {
    fetch(fetchUrl)
      .then((resp) => resp.json())
      .then((data) => setQuestions(data.results));
  };

  const handleGameOver = (pts) => {
    alert(`GAME OVER, PLEASE TRY AGAIN \n FINAL SCORE: ${pts}`);

    if (score === 0) {
      setScore(0);
      setStrikes(0);
      return;
    }

    const newScore = {
      name: activeProfile.username,
      score: pts,
    };

    setStrikes(0);
    setScore(0);

    fetch(highScoreUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newScore),
    })
      .then((resp) => resp.json())
      .then((data) => setHighScores([...highScores, data]));
  };

  console.log(playing);

  function startNewGame() {
    playing
      ? mouseClickEffect.current.play()
      : mouseClickEffect.current.pause();

    setScore(0);
    setStrikes(0);
    fetchQuery();
  }

  // const getHighScores = () => {
  //   fetch(highScoreUrl)
  //   .then(resp => resp.json())
  //   .then(data => setHighScores(data))
  // }

  const trackScore = (pts) => {
    setScore(score + pts);
  };

  const trackStrikes = () => {
    setStrikes(strikes + 1);
  };

  if (strikes > 2) {
    handleGameOver(score);
  }

  return (
    <div>
      <Score score={score} />
      <Strikes strikes={strikes} />
      <HighScoreSection highScores={highScores} />
      <Trivia
        questions={questions}
        score={score}
        strikes={strikes}
        trackScore={trackScore}
        trackStrikes={trackStrikes}
        fetchQuery={fetchQuery}
        activeProfile={activeProfile}
      />
      <div className="text-center text-white mt-5">
        <a onClick={startNewGame} className="welcomeBtn" href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Start New Game
        </a>
      </div>
    </div>
  );
}

export default TriviaGame;
