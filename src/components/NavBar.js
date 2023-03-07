import React, { useState } from "react";
import Trivia from "./Trivia.js";
import Collections from "./Collections";
const fetchUrl = "https://opentdb.com/api.php?amount=1";

function NavBar({ activeProfile }) {
  const [questions, setQuestions] = useState([]);

  const fetchQuery = () => {
    fetch(fetchUrl)
      .then((resp) => resp.json())
      .then((data) => setQuestions(data.results));
  };

  return (
    <div>
      <div className="fade-out fade-in">
        <h6>Hello</h6>
      </div>
      <Trivia questions={questions} />
      <Collections activeProfile={activeProfile} />

      {/*   <SectionThree/> */}

      <button onClick={fetchQuery} className="bg-transparent ms-3 mt-5">
        Random Question Genorator
      </button>
    </div>
  );
}

export default NavBar;
