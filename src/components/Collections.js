import React, { useState } from "react";
import CollectionQuestions from "./CollectionQuestions";
import CollectionQuestionsCard from "./CollectionQuestionsCard";

function Collections({ activeProfile }) {
  const [showCard, setShowCard] = useState(false);
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
    setQuestionData(obj);
    setShowCard(true);
  }

  const cardShow = showCard ? "d-block col-8" : "d-none";

  return (
    <div className="container p-4">
      <h4 className="text-center color-turquoise fw-normal">
        ({activeProfile.collections.length}) Saved Questions
      </h4>
      <div className="row flex-column justify-content-end align-items-center flex-lg-row pt-4">
        <div className={cardShow}>
          <CollectionQuestionsCard
            questionData={questionData}
            activeProfile={activeProfile}
          />
        </div>
        <div className="col col-lg-4 mt-4 mt-lg-0 overflow-y-scroll h-lg-100 h-400">
          {collectionQuestions}
        </div>
      </div>
    </div>
  );
}

export default Collections;
