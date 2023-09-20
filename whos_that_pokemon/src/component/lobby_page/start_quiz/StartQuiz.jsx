import React from "react";
import "./startquiz.css";
import { socket } from "../../../services/socket";
export default function StartQuiz() {
  function handleClick() {
    socket.emit("ready");
  }
  return (
    <button onClick={handleClick} class='button-30' role='button'>
      Ready!
    </button>
  );
}
