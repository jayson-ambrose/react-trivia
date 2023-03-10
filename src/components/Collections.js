import React, { useEffect, useState } from "react";
import CollectionQuestions from "./CollectionQuestions";
import CollectionQuestionsCard from "./CollectionQuestionsCard";

function Collections({ activeProfile, updateActiveProfile }) {
  const [showCard, setShowCard] = useState(false);
  const [questionData, setQuestionData] = useState({
    category: "",
    type: "",
    difficulty: "",
    question: "",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  });
  const [collection, setCollection] = useState([])

  console.log(activeProfile);
  console.log(questionData)

  useEffect(() => {
    setCollection(activeProfile.collections)
  }, [activeProfile])

  const deleteCollectionItem = () => {

    const removeId = questionData.question
    const removeIndex = collection.findIndex((trivia) => {
      return trivia.question === removeId
    })

    const removeArray = collection

    removeArray.splice(removeIndex, 1)
    
    const patchReadyObj = {
      id: activeProfile.id,
      username: activeProfile.username,
      collections: removeArray
    }

    console.log(patchReadyObj)
    
    fetch(`http://localhost:3001/profiles/${activeProfile.id}`,{
    method: "PATCH",
    headers: {
        "Content-Type":"application/json",
        Accept: "application/json"},
    body:JSON.stringify(patchReadyObj)}    
    )
    .then(resp => resp.json())
    .then(updatedItem => updateActiveProfile(updatedItem))
    .then(setQuestionData({
      category: "",
      type: "",
      difficulty: "",
      question: "",
      correct_answer: "",
      incorrect_answers: ["", "", ""],
    }))
    .then(setShowCard(false)) 

   //setShowCard(false) <---should make card disappear until another list item is clicked, this solves multiple delete issue.

  }  

  const collectionQuestions = activeProfile.collections.map((question) => (
    <CollectionQuestions
      key={question.question}
      question={question}
      handleUpdateDetails={handleUpdateDetails}
    />
  ));

  function handleUpdateDetails(obj) {
    setQuestionData(obj);
    setShowCard(true);
  }
  
  const cardShow = showCard ? "d-block col-8" : "d-none";

  return (
    <div className="container p-4">
      <h4 className="text-center color-turquoise fw-normal">
        ({activeProfile.collections.length}) Saved Questions
      </h4>
      <div className="row flex-column justify-content-end align-items-center flex-lg-row pt-4">
        <div className={cardShow}>
          <CollectionQuestionsCard
            questionData={questionData}
            activeProfile={activeProfile}
            deleteCollectionItem={deleteCollectionItem}            
          />
        </div>
        <div className="col col-lg-4 mt-4 mt-lg-0 overflow-y-scroll h-lg-100 h-400">
          {collectionQuestions}
        </div>
      </div>
    </div>
  );
}

export default Collections;
