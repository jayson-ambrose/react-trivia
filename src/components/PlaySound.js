import React from "react";
import { IoIosVolumeOff, IoIosVolumeHigh } from "react-icons/io";

function PlaySound({ play, pause, playing }) {
  return (
    <div>
      <button
        className="bg-transparent border-0 display-6 position-absolute"
        onClick={playing ? pause : play}
      >
        {playing ? <IoIosVolumeHigh /> : <IoIosVolumeOff />}
      </button>
    </div>
  );
}

export default PlaySound;
