import React, { useState } from "react";

function CollectionQuestionsCard({ questionData, activeProfile }) {
  console.log(questionData);
  const [showQuestionAnswer, setShowQuestionAnswer] = useState(false);
  const display =
    questionData.type === "boolean"
      ? "none border-0 m-0 p-0"
      : "d-flex my-2 p-0";

  const showAnswer = () => {
    setShowQuestionAnswer((showQuestionAnswer) => !showQuestionAnswer);
  };

  const displayAnswerToggle = showQuestionAnswer
    ? "mt-4 ms-3 fw-normal"
    : "d-none";

  const toggleButtonText = showQuestionAnswer ? "Hide Answer" : "Show Answer?";

  const handleClick = () => {
    const currentProfileId = activeProfile.id;
    const removeArry = activeProfile.collections;
    const removeIndex = removeArry.indexOf(currentProfileId);

    removeArry.splice(removeIndex, 1);

    activeProfile.collections = removeArry;

    fetch(`http://localhost:3001/profiles/${currentProfileId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        body: JSON.stringify(activeProfile),
      },
    });
  };

  return (
    <div className="question-card px-5 py-4 mt-4">
      <span className="opacity-0">placeholder</span>
      <div>
        <img
          id="notSaved"
          className="mb-2"
          onClick={handleClick}
          src="https://cdn.imgchest.com/files/pyvdcn9gbyk.png"
          width="25px"
        />
        <h5 className="my-2">{questionData.question}</h5>
        <h6 className="mt-3">Category: {questionData.category}</h6>
        <h6 className="mb-4">Difficulty: {questionData.difficulty}</h6>
        <ul className="list-unstyled">
          <li className="my-2 p-0">{questionData.correct_answer}</li>
          <li className="my-2 p-0">{questionData.incorrect_answers[0]}</li>
          <li className={display}>{questionData.incorrect_answers[1]}</li>
          <li className={display}>{questionData.incorrect_answers[2]}</li>
        </ul>
        <div className="d-flex align-items-center">
          <button className="px-3 mt-4 border-0" onClick={showAnswer}>
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
