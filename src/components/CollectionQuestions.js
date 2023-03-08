import React, { useState } from "react";

function CollectionQuestions({ collection }) {
  const [toggleCard, settoggleCard] = useState(true);
  //   console.log(toggleCard);
  console.log(collection.correct_answer);

  const showCard = () => {
    settoggleCard((toggleCard) => !toggleCard);
  };

  const showSavedCard =
    toggleCard === false ? "d-block question-card border px-3 py-5" : "d-none";

  const display =
    collection.type === "boolean" ? "none border-0 m-0 p-0" : "d-flex";
  return (
    <>
      <div className="col-8">
        <span className="opacity-0">placeholder</span>
        <div className={showSavedCard}>
          <h5>{collection.question}</h5>
          <ul className="list-unstyled">
            <li>{collection.correct_answer}</li>
            <li>{collection.incorrect_answers[0]}</li>
            <li className={display}>{collection.incorrect_answers[1]}</li>
            <li className={display}>{collection.incorrect_answers[2]}</li>
          </ul>
        </div>
      </div>
      <div className="col-4">
        <h5 className="color-turquoise fw-lighter mt-2" onClick={showCard}>
          {collection.question}
        </h5>
      </div>
    </>
  );
}

export default CollectionQuestions;
