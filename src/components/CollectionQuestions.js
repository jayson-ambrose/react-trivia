import React from "react";

function CollectionQuestions({ question, handleUpdateDetails }) {
  function handleClick() {
    handleUpdateDetails(question);
  }

  return (
    <>
      <h5 className="color-turquoise fw-lighter mt-4" onClick={handleClick}>
        {question.question}
      </h5>
    </>
  );
}

export default CollectionQuestions;