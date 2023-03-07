import React, {useState} from "react";

function Question( { triviaQuestion , trackScore, trackStrikes, fetchQuery} ) {
  // const heartOutline = <BsHeart />;
  // const fullHeart = <BsFillHeartFill />;
  let click = false;
  let pointValue;

  function addPoint (difficulty) {

    if (difficulty === "easy") {
      pointValue = 1
      console.log(pointValue)
    } else if (difficulty ==="medium") {
      pointValue = 2
      console.log(pointValue)
    } else if (difficulty ==="hard") {
      pointValue = 3;
      console.log(pointValue)
    }
    
    alert("Correct! " + pointValue + " points get!")
    trackScore(pointValue)
    fetchQuery()
  }

  function addStrike () {
    alert("Incorrect, the correct answer was " + triviaQuestion.correct_answer)
    trackStrikes()
    fetchQuery()
  }

  const handleClick = (e) => {
    if (
      document.getElementById("notSaved").src ==
      "https://cdn.imgchest.com/files/6yxkcqxkv7w.png"
    ) {
      document.getElementById("notSaved").src =
        "https://cdn.imgchest.com/files/pyvdcn9gbyk.png";
    }
    console.log(e.target.id);
  };

  const randomOrder = Math.floor(Math.random() * 5) + 1;

  const display =
    triviaQuestion.type === "boolean" ? "none border-0 m-0 p-0" : "d-flex";

  const handleAnswer = (e) => {
    console.log(e.target.id);
    e.target.id === "correct"
      ? addPoint(triviaQuestion.difficulty)
      : addStrike();
  };

  return (
    <div className="question-card ms-3 mt-4 border p-5">
      <img
        id="notSaved"
        onClick={handleClick}
        src="https://cdn.imgchest.com/files/6yxkcqxkv7w.png"
        width="25px"
      />
      <h5 className="py-3">{triviaQuestion.question}</h5>
      <ul className="list-unstyled d-flex flex-column">
        <li
          id="correct"
          className="d-flex"
          style={{ order: randomOrder }}
          onClick={handleAnswer}
        >
          {triviaQuestion.correct_answer}
        </li>
        <li className="d-flex" style={{ order: 1 }} onClick={handleAnswer}>
          {triviaQuestion.incorrect_answers[0]}
        </li>
        <li className={display} style={{ order: 2 }} onClick={handleAnswer}>
          {triviaQuestion.incorrect_answers[1]}
        </li>
        <li className={display} style={{ order: 3 }} onClick={handleAnswer}>
          {triviaQuestion.incorrect_answers[2]}
        </li>
      </ul>
      <h6>Point Value: {triviaQuestion.difficulty === 'easy' ? "1 point." : triviaQuestion.difficulty === 'medium' ? '2 points.' : '3 points.' }</h6>
      <br />
    </div>
  );
}

export default Question;
