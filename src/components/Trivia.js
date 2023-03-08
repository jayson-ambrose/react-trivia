import React from "react";
import Question from "./Question";

function Trivia({
  questions,
  handleClick,
  click,
  trackScore,
  fetchQuery,
  trackStrikes,
  profileURL,
  activeProfile,
}) {
  const displayQuestions = questions.map((triviaQuestion) => (
    <Question
      key={triviaQuestion.question}
      triviaQuestion={triviaQuestion}
      handleClick={handleClick}
      click={click}
      trackScore={trackScore}
      trackStrikes={trackStrikes}
      fetchQuery={fetchQuery}
      profileURL={profileURL}
      activeProfile={activeProfile}
    />
  ));

  return (
    <div className="d-flex justify-content-center">{displayQuestions}</div>
  );
}

export default Trivia;
