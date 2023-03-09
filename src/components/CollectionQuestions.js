import React from "react";

function CollectionQuestions({ collection, toggleCardHandle }) {
  //   console.log(toggleCard);
  return (
    <>
      <h5
        className="color-turquoise fw-lighter mt-2"
        onClick={toggleCardHandle}
      >
        {collection.question}
      </h5>
    </>
  );
}

export default CollectionQuestions;
