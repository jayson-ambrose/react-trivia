import React from "react";
import Question from "./Question";

function Trivia({ questions, handleClick, click , trackScore, fetchQuery, trackStrikes}) {

  const displayQuestions = questions.map((triviaQuestion) => (
    <Question
      key={triviaQuestion.question}
      triviaQuestion={triviaQuestion}
      handleClick={handleClick}
      click={click}
      trackScore={trackScore}
      trackStrikes={trackStrikes}
      fetchQuery={fetchQuery}
    />

  ));

  return <div>{displayQuestions}</div>;
}

export default Trivia;
