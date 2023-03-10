import React, { useState } from "react";

function CollectionQuestionsCard({ questionData, deleteCollectionItem}) {

  const [showQuestionAnswer, setShowQuestionAnswer] = useState(false);
  const display =
    questionData.type === "boolean" ? "none border-0 m-0 p-0" : "d-flex";

  const showSpan = display === "d-flex" ? "d-flex me-2" : "d-none";

  const randomOrder = Math.floor(Math.random() * 5) + 1;

  const showAnswer = () => {
    setShowQuestionAnswer((showQuestionAnswer) => !showQuestionAnswer);
  };

  const displayAnswerToggle = showQuestionAnswer
    ? "mt-4 ms-3 fw-normal"
    : "d-none";

  const toggleButtonText = showQuestionAnswer ? "Hide Answer" : "Show Answer?";

  const handleClick = () => {
    deleteCollectionItem()
  };

  return (
    <div className="question-card pt-0 p-4 align-items-center">
      <span className="opacity-0">placeholder</span>
      <div>
        <img
          id="notSaved"
          className="pb-3"
          onClick={handleClick}
          src="https://cdn.imgchest.com/files/pyvdcn9gbyk.png"
          width="25px"
        />
        <h3>Question</h3>
        <h4 className="m-0 p-0">{questionData.question}</h4>
        <h6 className="m-0">Category: {questionData.category}</h6>
        <h6 className="m-0">Difficulty: {questionData.difficulty}</h6>
        <hr />
        <ul className="list-unstyled d-flex flex-column">
          <li id="correct" className="d-flex">
            <span className="me-2">A:</span>
            <p style={{ order: randomOrder }}>{questionData.correct_answer}</p>
          </li>
          <li className="d-flex">
            <span className="me-2">B: </span>
            <p style={{ order: 1 }}>{questionData.incorrect_answers[0]}</p>
          </li>
          <li className={display}>
            <span className={showSpan}>C: </span>
            <p style={{ order: 2 }}>{questionData.incorrect_answers[1]}</p>
          </li>
          <li className={display}>
            <span className={showSpan}>D: </span>
            <p style={{ order: 3 }}>{questionData.incorrect_answers[2]}</p>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <button className="px-3 py-2 mt-4 border-0" onClick={showAnswer}>
            {toggleButtonText}
          </button>
          <h5 className="mt-4 ms-1">:</h5>
          <h5 className={displayAnswerToggle}>{questionData.correct_answer}</h5>
        </div>
      </div>
    </div>
  );
}

export default CollectionQuestionsCard;
