import React from "react";

function Score({ strikes }) {

  function onStrike (event) {    
    event.target.setAttribute("class", "text-red ms-3")
  }

  return <div onChange={onStrike} className="text-white ms-3">STRIKES: {strikes}</div>;
}

export default Score;
