import React from "react";
import ChatBox from "./chat_box/ChatBox";
import { socket } from "../../services/socket";
import LobbyStatus from "./lobby_status/LobbyStatus";
import StartQuiz from "./start_quiz/StartQuiz";
import "./lobbypage.css";
export default function LobbyPage({ data }) {
  socket.on("lobbyStatus", (arg) => {
    console.log(arg);
  });
  return (
    <div>
      <h1 className='lobby-title'>Lobby</h1>
      <div className='lobby-page'>
        <ChatBox data={data} />;
        <div className='lobby-start'>
          <LobbyStatus />
          <StartQuiz />
        </div>
      </div>
    </div>
  );
}
