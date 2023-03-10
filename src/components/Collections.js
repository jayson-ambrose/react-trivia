import React, { useEffect, useState } from "react";
import CollectionQuestions from "./CollectionQuestions";
import CollectionQuestionsCard from "./CollectionQuestionsCard";

function Collections({ activeProfile, updateActiveProfile }) {

  const [toggleCard, setToggleCard] = useState(false);

  const [collection, setCollection] = useState([])
  const [questionData, setQuestionData] = useState({
    category: "",
    type: "",
    difficulty: "",
    question: "",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  });

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
  }

  return (
    <div className="container p-4">
      <h4 className="text-center color-turquoise fw-normal">
        ({activeProfile.collections.length}) Saved Questions
      </h4>
      <div className="row pt-4">
        <div className="col-8">
          <CollectionQuestionsCard questionData={questionData} deleteCollectionItem={deleteCollectionItem} />
        </div>
        <div className="col-4">{collectionQuestions}</div>
      </div>
    </div>
  );
}

export default Collections;
