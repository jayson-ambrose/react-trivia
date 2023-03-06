import React from 'react'

function TrivNightQuestion({trivia}) {

    const {category, correct_answer, difficulty, incorrect_answers, question, type} = trivia

    return (
        <div>
            <p>
                <span>{question}</span>
            </p>
        </div>
    )
}

export default TrivNightQuestion;