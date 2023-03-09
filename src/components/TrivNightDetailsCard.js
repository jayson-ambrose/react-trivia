import React from 'react'

function TrivNightDetailsCard ({selectedQuestion}) {

    const {category, correct_answer, difficulty, incorrect_answers, question, type} = selectedQuestion

    return (
        <div>
            Category={category}<br/>
            Correct Answer={correct_answer}<br/>
            Difficulty={difficulty}<br/>
            Incorrect Answers={incorrect_answers}<br/>
            Question={question}<br/>
            Category={category}<br/>
            Type={type}<br/>
        </div>
    )
}

export default TrivNightDetailsCard;