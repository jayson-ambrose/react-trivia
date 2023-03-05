import React from 'react'
import Question from './Question'

function Trivia ({questions}) {

    const displayQuestions = questions.map((triviaQuestion) => <Question key={triviaQuestion.question} triviaQuestion={triviaQuestion} />)

    return (
        <div>
            {displayQuestions}
        </div>
    )
}

export default Trivia;