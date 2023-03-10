import React from "react";

function TrivNightQuestion({ trivia, handleSelectQuestion, showToolCatCard }) {
  const { correct_answer, question } = trivia;

  const handleClick = () => {
    handleSelectQuestion(trivia);
  };

  return (
    <div onClick={() => handleClick()}>
      <h4 onClick={showToolCatCard} className="mb-4">
        {question}
        ...{correct_answer}
      </h4>
    </div>
  );
}

export default TrivNightQuestion;
