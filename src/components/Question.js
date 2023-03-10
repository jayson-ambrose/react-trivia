import React from "react";
const entities = require("entities");

function Question({
  triviaQuestion,
  trackScore,
  trackStrikes,
  fetchQuery,
  activeProfile,
}) {
  let pointValue;

  function addPoint(difficulty) {
    if (difficulty === "easy") {
      pointValue = 1;
    } else if (difficulty === "medium") {
      pointValue = 2;
    } else if (difficulty === "hard") {
      pointValue = 3;
    }

    alert("Correct! " + pointValue + " points get!");
    trackScore(pointValue);
    fetchQuery();
  }

  function addStrike() {
    alert("Incorrect, the correct answer was " + triviaQuestion.correct_answer);
    trackStrikes();
    fetchQuery();
  }

  const handleClick = (e) => {
    const currentProfileId = activeProfile.id;
    if (
      document.getElementById("notSaved").src ==
      "https://cdn.imgchest.com/files/6yxkcqxkv7w.png"
    ) {
      document.getElementById("notSaved").src =
        "https://cdn.imgchest.com/files/pyvdcn9gbyk.png";
    }

    activeProfile.collections.push(triviaQuestion);

    fetch(`http://localhost:3001/profiles/${currentProfileId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(activeProfile),
    }).then((response) => response.json());
  };

  const randomOrder = Math.floor(Math.random() * 5) + 1;

  const display =
    triviaQuestion.type === "boolean" ? "none border-0 m-0 p-0" : "d-flex pb-1";

  const handleAnswer = (e) => {
    e.target.id === "correct"
      ? addPoint(triviaQuestion.difficulty)
      : addStrike();
  };

  return (
    <div className="question-card p-4">
      <img
        className="pb-3"
        id="notSaved"
        onClick={handleClick}
        src="https://cdn.imgchest.com/files/6yxkcqxkv7w.png"
        width="25px"
      />
      <h3>Question</h3>
      <h4 className="py-0">{entities.decodeHTML(triviaQuestion.question)}</h4>
      <hr></hr>
      <ul className="list-unstyled d-flex flex-column">
        <li
          id="correct"
          className="d-flex pb-1"
          onClick={handleAnswer}
          style={{ order: randomOrder }}
        >
          {triviaQuestion.correct_answer}
        </li>
        <li className="d-flex pb-1" onClick={handleAnswer} style={{ order: 1 }}>
          {triviaQuestion.incorrect_answers[0]}
        </li>
        <li className={display} onClick={handleAnswer} style={{ order: 2 }}>
          {triviaQuestion.incorrect_answers[1]}
        </li>
        <li className={display} onClick={handleAnswer} style={{ order: 3 }}>
          {triviaQuestion.incorrect_answers[2]}
        </li>
      </ul>
      <h6 className="text-end mt-5">
        Point Value:{" "}
        {triviaQuestion.difficulty === "easy"
          ? "1 point."
          : triviaQuestion.difficulty === "medium"
          ? "2 points."
          : "3 points."}
      </h6>
      <br />
    </div>
  );
}

export default Question;
