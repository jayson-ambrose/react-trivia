import React from "react";
import Question from "./Question";

function Trivia({ questions, handleClick, click }) {
  const displayQuestions = questions.map((triviaQuestion) => (
    <Question
      key={triviaQuestion.question}
      triviaQuestion={triviaQuestion}
      handleClick={handleClick}
      click={click}
    />
  ));

  return <div>{displayQuestions}</div>;
}

export default Trivia;
