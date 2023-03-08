import React from "react";
import { BsPauseCircle, BsPlayCircleFill } from "react-icons/bs";

function PlaySound({ play, pause, playing }) {
  return (
    <div>
      <button
        className="bg-transparent border-0 display-6 position-absolute"
        onClick={playing ? pause : play}
      >
        {playing ? <BsPauseCircle /> : <BsPlayCircleFill />}
      </button>
    </div>
  );
}

export default PlaySound;