import React from "react";
import CollectionQuestions from "./CollectionQuestions";

function Collections({ activeProfile }) {
  console.log(activeProfile);
  const collection = activeProfile.collections.map((collection) => (
    <CollectionQuestions collection={collection} />
  ));

  return (
    <div className="container p-4">
      <h4 className="text-center color-turquoise fw-normal">
        ({activeProfile.collections.length}) Saved Questions
      </h4>
      <div className="row pt-4">{collection}</div>
    </div>
  );
}

export default Collections;
