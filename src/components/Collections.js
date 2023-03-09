import React, { useState } from "react";
import CollectionQuestions from "./CollectionQuestions";
import CollectionQuestionsCard from "./CollectionQuestionsCard";

function Collections({ activeProfile }) {
  const [toggleCard, setToggleCard] = useState(false);
  console.log(toggleCard);

  const [questionData, setQuestionData] = useState({
    category: "",
    type: "",
    difficulty: "",
    question: "",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  });

  console.log(activeProfile);

  const collectionQuestions = activeProfile.collections.map((question) => (
    <CollectionQuestions
      key={question.question}
      question={question}
      handleUpdateDetails={handleUpdateDetails}
    />
  ));

  function handleUpdateDetails(obj) {
    setToggleCard((toggleCard) => !toggleCard);
    setQuestionData(obj);
  }

  const showCard = toggleCard ? "d-block col col-lg-8" : "d-none";

  return (
    <div className="container p-4">
      <h4 className="text-center color-turquoise fw-normal">
        ({activeProfile.collections.length}) Saved Questions
      </h4>
      <div className="row flex-column justify-content-end flex-lg-row pt-4">
        <div className={showCard}>
          <CollectionQuestionsCard
            questionData={questionData}
            activeProfile={activeProfile}
          />
        </div>
        <div className="col col-lg-4 mt-4 mt-lg-0 overflow-y-scroll h-400">
          {collectionQuestions}
        </div>
      </div>
    </div>
  );
}

export default Collections;
