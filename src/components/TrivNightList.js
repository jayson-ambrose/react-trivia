import React, { useState } from 'react'
import TrivNightQuestion from './TrivNightQuestion'
import TrivNightDetailsCard from './TrivNightDetailsCard'

function TrivNightList ({questList}) {

    const [selectedQuestion, setSelectedQuestion] = useState({
        category: "",
        type: "",
        difficulty: "",
        question: "",
        correct_answer: "",
        incorrect_answers: ["", "", ""]
    }) 

    const handleSelectQuestion = (obj) => {
        console.log(obj)
        setSelectedQuestion(obj)
    }
   
    const triviaNightDisplay = questList.map((trivia) => {
         return(
            <TrivNightQuestion 
                key={trivia.question} 
                trivia={trivia}
                handleSelectQuestion={handleSelectQuestion}
            />
         )})

    return (
        <div className="color-turquoise ms-3">
            <TrivNightDetailsCard selectedQuestion={selectedQuestion} />
            <hr/>
            {triviaNightDisplay}
        </div>
    )
}

export default TrivNightList; 