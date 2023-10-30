import React, { useState } from "react";
import "./startquiz.css";
import { socket } from "../../../services/socket";
export default function StartQuiz() {
  const [clicked, SetClicked] = useState(false);
  function handleClick() {
    socket.emit("ready");
    SetClicked(true);
  }
  return (
    <>
      {clicked ? (
        <div> Game will being soon when all ready...</div>
      ) : (
        <button
          disabled={clicked}
          onClick={handleClick}
          class='button-30'
          role='button'
        >
          Ready!
        </button>
      )}
    </>
  );
}
