import React from "react";
import ChatBox from "./chat_box/ChatBox";
import "./lobbypage.css";
export default function LobbyPage({ data }) {
  return (
    <div>
      <h1 className='lobby-title'>Lobby</h1>
      <ChatBox data={data} />;
    </div>
  );
}
