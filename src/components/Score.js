import React from "react";

function Score({ score }) {
  return (
    <div className="color-turquoise ms-3 text-shadow-turquoise">
      POINTS: {score}
    </div>
  );
}

export default Score;
