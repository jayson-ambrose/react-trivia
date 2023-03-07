import React, { useState } from "react";
import Trivia from "./Trivia.js";
import Score from "./Score.js"
import Strikes from "./Strikes.js"
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers.js";

const fetchUrl = "https://opentdb.com/api.php?amount=1";


function TriviaGame({activeProfile}) {

  const [questions, setQuestions] = useState([]);
  const [click, setClick] = useState(false);
  const [score, setScore] = useState(0)
  const [strikes, setStrikes] = useState(0)

  const handleClick = () => setClick(!click);

  const fetchQuery = () => {

    fetch(fetchUrl)
      .then((resp) => resp.json())
      .then((data) => setQuestions(data.results));
  };

  function handleGameOver (pts) {
    console.log("FINAL SCORE: " + pts)    
    console.log(activeProfile.username)
    //process high score stuff with a patch.

    setScore(0)
    setStrikes(0)
  }

  function startNewGame () {
    setScore(0)
    setStrikes(0)
    fetchQuery()
  }  

  const trackScore = (pts) => {
    setScore(score + pts)
  }

  const trackStrikes = () => {
    setStrikes(strikes +1)
  }

  if (strikes > 2) {
    handleGameOver(score)
  }

  return (
    <div>
      
      <Trivia 
        questions={questions} 
        handleClick={handleClick} 
        click={click} 
        score={score} 
        strikes={strikes}
        trackScore={trackScore}
        trackStrikes={trackStrikes}
        fetchQuery={fetchQuery}
      />
      <Score score={score}/>
      <Strikes strikes={strikes} />
      <button onClick={startNewGame} className="bg-transparent ms-3 mt-5">
        Start New Game
      </button>
    </div>
  );
}

export default TriviaGame;
