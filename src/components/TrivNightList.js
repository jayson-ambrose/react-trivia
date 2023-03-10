import React, { useState } from "react";
import TrivNightQuestion from "./TrivNightQuestion";
import TrivNightDetailsCard from "./TrivNightDetailsCard";

function TrivNightList({ questList, decodeString }) {
  const [selectedQuestion, setSelectedQuestion] = useState({
    category: "",
    type: "",
    difficulty: "",
    question: "",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  });
  const [showToolCard, setShowToolCard] = useState(false);

  const handleSelectQuestion = (obj) => {
    setSelectedQuestion(obj);
  };

  const showToolCatCard = () => {
    setShowToolCard(true);
  };

  const triviaNightDisplay = questList.map((trivia) => {
    return (
      <TrivNightQuestion
        key={trivia.question}
        trivia={trivia}
        handleSelectQuestion={handleSelectQuestion}
        showToolCatCard={showToolCatCard}
      />
    );
  });

  return (
    <div className="text-white ms-3">
      <TrivNightDetailsCard
        selectedQuestion={selectedQuestion}
        showToolCard={showToolCard}
        decodeString={decodeString}
      />
      <h3 className="py-2">Questions</h3>
      <div className="text-white my-1 overflow-y-scroll h-345 mt-4">
        {triviaNightDisplay}
      </div>
    </div>
  );
}

export default TrivNightList;
