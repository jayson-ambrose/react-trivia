import React, { useState } from "react";
import CollectionQuestions from "./CollectionQuestions";
import CollectionQuestionsCard from "./CollectionQuestionsCard";

function Collections({ activeProfile }) {
  const [toggleCard, setToggleCard] = useState(false);

  const [questionData, setQuestionData] = useState({
    category: "",
    type: "",
    difficulty: "",
    question: "",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  });

  console.log(activeProfile);

  // const toggleCardHandle = () => {
  //   setToggleCard((toggleCard) => !toggleCard);
  // };

  //this should be good

  const collectionQuestions = activeProfile.collections.map((question) => (
    <CollectionQuestions
      key={question.question}
      question={question}
      handleUpdateDetails={handleUpdateDetails}
      // toggleCardHandle={toggleCardHandle}
    />
  ));

  const collection = activeProfile.collection;

  function handleUpdateDetails(obj) {
    setQuestionData(obj);
  }

  return (
    <div className="container p-4">
      <h4 className="text-center color-turquoise fw-normal">
        ({activeProfile.collections.length}) Saved Questions
      </h4>
      <div className="row pt-4">
        <div className="col-8">
          <CollectionQuestionsCard questionData={questionData} />
        </div>
        <div className="col-4">{collectionQuestions}</div>
      </div>
    </div>
  );
}

export default Collections;
