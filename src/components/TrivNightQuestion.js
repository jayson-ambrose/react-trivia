import React from "react";
const entities = require("entities");

function TrivNightQuestion({ trivia, handleSelectQuestion, showToolCatCard }) {
  const { correct_answer, question } = trivia;

  const handleClick = () => {
    handleSelectQuestion(trivia);
  };

  return (
    <div onClick={() => handleClick()}>
      <h4 onClick={showToolCatCard} className="mb-4">
        {entities.decodeHTML(question)}
        ...{entities.decodeHTML(correct_answer)}
      </h4>
    </div>
  );
}

export default TrivNightQuestion;
