import React, { useState } from "react";
import Trivia from "./Trivia.js";
import SectionTwo from "./SectionTwo.js";
import SectionThree from "./SectionThree.js";
const fetchUrl = "https://opentdb.com/api.php?amount=1";

function NavBar({ activeProfile }) {
  const [questions, setQuestions] = useState([]);

  const fetchQuery = () => {
    fetch(fetchUrl)
      .then((resp) => resp.json())
      .then((data) => setQuestions(data.results));
  };

  console.log(questions);

  return (
    <div>
      <div className="fade-out fade-in">
        <h6>Hello</h6>
      </div>
      <Trivia questions={questions} />

      {/* <SectionTwo/>
            <SectionThree/> */}

      <button onClick={fetchQuery} className="bg-transparent ms-3 mt-5">
        Random Question Genorator
      </button>
    </div>
  );
}

export default NavBar;
