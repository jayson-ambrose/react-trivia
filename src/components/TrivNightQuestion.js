import React from 'react'

function TrivNightQuestion({trivia, handleSelectQuestion}) {

    const { correct_answer, question } = trivia

    const handleClick = () => {
        handleSelectQuestion(trivia)
    }

    return (
        <div onClick={() => handleClick()}>
            <p>
                {question}
                ...{correct_answer}
            </p>
        </div> 
    )
}

export default TrivNightQuestion;