import React, { useState } from "react";
import Trivia from "./Trivia.js";
import SectionTwo from "./SectionTwo.js";
import SectionThree from "./SectionThree.js";
const fetchUrl = "https://opentdb.com/api.php?amount=1";

function NavBar() {
  const [questions, setQuestions] = useState([]);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const fetchQuery = () => {
    fetch(fetchUrl)
      .then((resp) => resp.json())
      .then((data) => setQuestions(data.results));
  };

  console.log(questions);

  return (
    <div>
      <Trivia questions={questions} handleClick={handleClick} click={click} />
      {/* <SectionTwo/>
            <SectionThree/> */}
      <button onClick={fetchQuery} className="bg-transparent ms-3 mt-5">
        Random Question Genorator
      </button>
    </div>
  );
}

export default NavBar;
