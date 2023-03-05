import React from 'react'

function Question ({triviaQuestion}) {

    let {question} = triviaQuestion

    if (question.includes("&quot;")) {
        question = question.replaceAll("&quot;", '"')

        fixQuotationMarks(question)
    }

    if (question.includes("&#039;")) {
        question = question.replaceAll("&#039;", "'")

        fixQuotationMarks(question)
    }

    function fixQuotationMarks(string){
        console.log(string)
    }

    function responseType(object) {

        if (object.type === 'boolean') {
            return (
                <select>
                    <option>True</option>
                    <option>False</option>
                </select>
            )
        }
        else {
            return(
                <select>
                    <option>{triviaQuestion.incorrect_answers[0]}</option>
                    <option>{triviaQuestion.incorrect_answers[1]}</option>
                    <option>{triviaQuestion.correct_answer}</option>
                    <option>{triviaQuestion.incorrect_answers[2]}</option>
                </select>
            )
        }
    }

    return (
        <div>
            {question}
            <br/>
            {responseType(triviaQuestion)}
        </div>
    )
}

export default Question;