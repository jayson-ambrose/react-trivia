import React, { useState } from "react";
const entities = require("entities");

function TrivNightDetailsCard({ selectedQuestion, showToolCard }) {
  const {
    category,
    correct_answer,
    difficulty,
    incorrect_answers,
    question,
    type,
  } = selectedQuestion;
  const [showQuestionAnswer, setShowQuestionAnswer] = useState(false);
  console.log(showToolCard);

  const showAnswer = () => {
    setShowQuestionAnswer((showQuestionAnswer) => !showQuestionAnswer);
  };

  const display = type === "boolean" ? "none border-0 m-0 p-0" : "d-flex";

  const showSpan = display === "d-flex" ? "d-flex me-2" : "d-none";

  const toggleButtonText = showQuestionAnswer ? "Hide Answer" : "Show Answer?";

  const displayAnswerToggle = showQuestionAnswer
    ? "mt-4 ms-3 fw-normal"
    : "d-none";

  const showCard =
    showToolCard === true
      ? "d-flex align-items-center justify-content-center"
      : "d-none";

  return (
    <div className={showCard}>
      <div className="question-card pt-0 p-4 position-absolute right-0 me-10 mt-10">
        <span className="opacity-0">placeholder</span>
        <div>
          <h3>Question</h3>
          <h4 className="m-0 p-0">{entities.decodeHTML(question)}</h4>
          <h6 className="m-0">Category: {category}</h6>
          <h6 className="m-0">Difficulty: {difficulty}</h6>
          <hr />
          <ul className="list-unstyled d-flex flex-column">
            <li id="correct" className="d-flex">
              <span className="me-2">A:</span>
              <p style={{ order: 1 }}>{correct_answer}</p>
            </li>
            <li className="d-flex">
              <span className="me-2">B: </span>
              <p style={{ order: 1 }}>{incorrect_answers[0]}</p>
            </li>
            <li className={display}>
              <span className={showSpan}>C: </span>
              <p style={{ order: 2 }}>{incorrect_answers[1]}</p>
            </li>
            <li className={display}>
              <span className={showSpan}>D: </span>
              <p style={{ order: 3 }}>{incorrect_answers[2]}</p>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="px-3 py-2 mt-4 border-0" onClick={showAnswer}>
              {toggleButtonText}
            </button>
            <h5 className="mt-4 ms-1">:</h5>
            <h5 className={displayAnswerToggle}>{correct_answer}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrivNightDetailsCard;
