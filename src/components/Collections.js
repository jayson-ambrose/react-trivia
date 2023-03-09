import React, { useState } from "react";
import CollectionQuestions from "./CollectionQuestions";
import CollectionQuestionsCard from "./CollectionQuestionsCard";

function Collections({ activeProfile }) {
  const [toggleCard, setToggleCard] = useState(false);
  console.log(activeProfile);

  const toggleCardHandle = () => {
    setToggleCard((toggleCard) => !toggleCard);
  };

  const collection = activeProfile.collections.map((collection) => (
    <CollectionQuestions
      collection={collection}
      toggleCardHandle={toggleCardHandle}
      heading={collection.question}
    />
  ));

  // const collectionQuestionCard = activeProfile.collections.map((collection) => (
  // ));

  return (
    <div className="container p-4">
      <h4 className="text-center color-turquoise fw-normal">
        ({activeProfile.collections.length}) Saved Questions
      </h4>
      <div className="row pt-4">
        <div className="col-8">
          <CollectionQuestionsCard
            collection={collection}
            toggleCard={toggleCard}
          />
        </div>
        <div className="col-4"> {collection}</div>
      </div>
    </div>
  );
}

export default Collections;
