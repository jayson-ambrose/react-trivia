import React from "react";
const entities = require("entities");

function CollectionQuestions({ question, handleUpdateDetails }) {
  function handleClick() {
    handleUpdateDetails(question);
  }

  return (
    <>
      <h5 className="color-turquoise fw-lighter mt-4" onClick={handleClick}>
        {entities.decodeHTML(question.question)}
      </h5>
    </>
  );
}

export default CollectionQuestions;
