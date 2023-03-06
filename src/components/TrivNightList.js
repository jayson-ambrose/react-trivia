import React from 'react'
import TrivNightQuestion from './TrivNightQuestion'

function TrivNightList ({questList}) {

    console.log(questList)

    const triviaNightDisplay = questList.map((trivia) => <TrivNightQuestion key={trivia.question} trivia={trivia}/>)

    return (
        <div>
            {triviaNightDisplay}
        </div>
    )
}

export default TrivNightList;