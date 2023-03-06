import React, { useState } from "react";
import Trivia from "./Trivia.js";
import TriviaNight from "./TriviaNight.js";
import SectionThree from "./SectionThree.js";

const fetchUrl = "https://opentdb.com/api.php?amount=1";


function NavBar({activeProfile}) {

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
      <TriviaNight activeProfile={activeProfile}/>
      <Trivia questions={questions} handleClick={handleClick} click={click} />
      

      {/*             <SectionThree/> */}
            
      <button onClick={fetchQuery} className="bg-transparent ms-3 mt-5">
        Random Question Generator
      </button>
    </div>
  );
}

export default NavBar;
