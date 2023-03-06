import React from "react";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";

function Question({ triviaQuestion, handleClick, click }) {
  console.log(triviaQuestion);

  const randomOrder = Math.floor(Math.random() * 5) + 1;
  console.log(randomOrder);

  const display =
    triviaQuestion.type === "boolean" ? "none border-0 m-0 p-0" : "d-flex";

  const handleAnswer = (e) => {
    e.target.id === "correct"
      ? alert("Correct!")
      : alert("I'm sorry, you chose the wrong answer.");
  };

  return (
    <div className="question-card ms-3 mt-4 border p-5">
      <div>
        {click ? (
          <BsFillHeartFill onMouseDown={handleClick} />
        ) : (
          <BsHeart onMouseDown={handleClick} />
        )}
      </div>
      <h5 className="py-3">{triviaQuestion.question}</h5>
      <ul className="list-unstyled d-flex flex-column">
        <li
          id="correct"
          className="d-flex"
          style={{ order: randomOrder }}
          onClick={handleAnswer}
        >
          {triviaQuestion.correct_answer}
        </li>
        <li className="d-flex" style={{ order: 1 }} onClick={handleAnswer}>
          {triviaQuestion.incorrect_answers[0]}
        </li>
        <li className={display} style={{ order: 2 }} onClick={handleAnswer}>
          {triviaQuestion.incorrect_answers[1]}
        </li>
        <li className={display} style={{ order: 3 }} onClick={handleAnswer}>
          {triviaQuestion.incorrect_answers[2]}
        </li>
      </ul>
      <br />
    </div>
  );
}

export default Question;
