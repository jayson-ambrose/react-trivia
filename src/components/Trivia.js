import React from "react";
import Question from "./Question";

function Trivia({
  questions,
  trackScore,
  fetchQuery,
  trackStrikes,
  profileURL,
  activeProfile,
  decodeString
}) {
  const displayQuestions = questions.map((triviaQuestion) => (
    <Question
      key={triviaQuestion.question}
      triviaQuestion={triviaQuestion}
      trackScore={trackScore}
      trackStrikes={trackStrikes}
      fetchQuery={fetchQuery}
      profileURL={profileURL}
      activeProfile={activeProfile}
      decodeString={decodeString}
    />
  ));

  return (
    <div className="d-flex justify-content-center">
      {displayQuestions}
    </div>
  );
}

export default Trivia;
