import React from 'react'

function TrivNightQuestion({trivia}) {

    const {category, correct_answer, difficulty, incorrect_answers, question, type} = trivia

    return (
        <div>
            <p>
                <span>{question}</span>
                <br/>
                <span>{correct_answer}</span>
                <br/>
                <span>{difficulty}</span>
                <br/>
                <span>{incorrect_answers}</span>
                <br/>
                <span>{type}</span>
                <br/>
            </p>
        </div>
    )
}

export default TrivNightQuestion;