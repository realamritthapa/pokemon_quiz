import React, { useState } from "react";
import ChatBox from "./chat_box/ChatBox";
import { socket } from "../../services/socket";
import LobbyStatus from "./lobby_status/LobbyStatus";
import StartQuiz from "./start_quiz/StartQuiz";
import Countdown from "../quiz_page/timer_page/Countdown";
import "./lobbypage.css";
export default function LobbyPage({ data }) {
  const [readyForQuiz, setReadyForQuiz] = useState(false);
  socket.on("roomReady", (arg) => {
    console.log("this is from lobby", arg);
    setReadyForQuiz(arg);
  });
  return (
    <div>
      <h1 className='lobby-title'>Lobby</h1>
      <div className='lobby-page'>
        <ChatBox data={data} />
        <div className='lobby-start'>
          {readyForQuiz ? (
            <Countdown time={10} />
          ) : (
            <>
              <LobbyStatus />
              <img className='pika-pic' src='/assets/pika1.png' />
              <StartQuiz />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
