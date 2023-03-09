import React from "react";

function CollectionQuestions({ question, handleUpdateDetails }) {
  function handleClick(event) {
    handleUpdateDetails(question);
  }

  return (
    <>
      <h5 className="color-turquoise fw-lighter mt-2" onClick={handleClick}>
        {question.question}
      </h5>
    </>
  );
}

export default CollectionQuestions;
