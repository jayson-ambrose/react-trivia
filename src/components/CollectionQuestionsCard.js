import React from "react";

function CollectionQuestionsCard({ toggleCard, collection }) {
  console.log(toggleCard);

  const toggleQuestionCard = toggleCard ? "d-block col-8" : "d-none";

  const display =
    collection.type === "boolean" ? "none border-0 m-0 p-0" : "d-flex";

  return (
    <div>
      <span className="opacity-0">placeholder</span>
      <div className={toggleQuestionCard}>
        <h5>{collection.question}</h5>
        <ul className="list-unstyled">
          <li>{collection.correct_answer}</li>
          <li>{collection.incorrect_answers[0]}</li>
          <li className={display}>{collection.incorrect_answers[1]}</li>
          <li className={display}>{collection.incorrect_answers[2]}</li>
        </ul>
      </div>
    </div>
  );
}

export default CollectionQuestionsCard;
