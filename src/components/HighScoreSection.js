import React from 'react'

function HighScoreSection ({highScores}) {

    const displayScores = highScores.filter((score) => score.score > 0)
      .sort((scoreX, scoreY) => (scoreX.score < scoreY.score ? 1 : scoreX.score > scoreY.score ? -1 : 0))
      .map((score) => <li key={score.id}><b>{score.name}</b> scored {score.score} points!</li>)   
    
    return (
        <div>
            {displayScores}
        </div>
    )
}

export default HighScoreSection;