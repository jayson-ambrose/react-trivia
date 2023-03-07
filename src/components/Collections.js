import React from "react";
import CollectionsDisplay from "./CollectionsDisplay";

function Collections({ activeProfile }) {
  console.log(activeProfile);

  const collections = activeProfile.collections.map((question) => (
    <CollectionsDisplay key={question} question={question} />
  ));

  return (
    <div className="container">
      <div className="row">{collections}</div>
    </div>
  );
}

export default Collections;