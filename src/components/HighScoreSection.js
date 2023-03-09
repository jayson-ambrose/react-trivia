import React from "react";

function HighScoreSection({ highScores }) {
  const displayScores = highScores
    .filter((score) => score.score > 0)
    .sort((scoreX, scoreY) =>
      scoreX.score < scoreY.score ? 1 : scoreX.score > scoreY.score ? -1 : 0
    )
    .map((score) => (
      <li key={score.id}>
        <b>{score.name}</b> scored {score.score} points!
      </li>
    ));

  return (
    <div className="position-absolute bg-white my-4 mx-3 p-3 d-none d-lg-block mx-h-475">
      <h5 className="p-2 m-0">Top Scores: </h5>
      <ul className="list-unstyled p-0 h-380 overflow-y-scroll">
        {displayScores}
      </ul>
    </div>
  );
}

export default HighScoreSection;
