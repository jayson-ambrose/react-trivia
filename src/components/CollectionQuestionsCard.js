import React from "react";

function CollectionQuestionsCard({ questionData }) {
  console.log(questionData);
  const display =
    questionData.type === "boolean" ? "none border-0 m-0 p-0" : "d-flex";

  return (
    <div>
      <span className="opacity-0">placeholder</span>
      <div>
        <h5>{questionData.question}</h5>
        <ul className="list-unstyled">
          <li>{questionData.correct_answer}</li>
          <li>{questionData.incorrect_answers[0]}</li>
          <li className={display}>{questionData.incorrect_answers[1]}</li>
          <li className={display}>{questionData.incorrect_answers[2]}</li>
        </ul>
      </div>
    </div>
  );
}

export default CollectionQuestionsCard;
