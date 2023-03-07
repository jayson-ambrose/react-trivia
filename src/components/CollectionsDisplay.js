import React from "react";

function CollectionsDisplay({ question }) {
  const showQuestionInfo = () => {
    document.getElementById("questionCard").classList.add("d-block");
    document.getElementById("questionCard").classList.remove("d-none");
  };
  return (
    <>
      <div id="questionCard" className="col-8 d-none">
        <h5>{question.question}</h5>
        <ul className="list-unstyled">
          <li>{question.correct_answer}</li>
          {question.incorrect_answers.map((incorrectAnswer) => (
            <li>{incorrectAnswer}</li>
          ))}
        </ul>
      </div>
      <div className="col-4">
        <div>
          <h5 onClick={showQuestionInfo}>{question.question}</h5>
        </div>
      </div>
    </>
  );
}

export default CollectionsDisplay;