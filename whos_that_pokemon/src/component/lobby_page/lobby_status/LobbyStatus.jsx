import React, { useEffect, useState } from "react";
import { socket } from "../../../services/socket";
import "./lobbystatus.css";
export default function LobbyStatus() {
  const [lobbyStatus, setLobbyStatus] = useState([]);
  const myId = socket.id;
  console.log(socket.id);
  useEffect(() => {
    socket.on("lobbyStatus", (arr) => {
      console.log(arr);
      setLobbyStatus(arr);
    });
  }, []);
  useEffect(() => {
    console.log("under here");
    console.log(lobbyStatus);
  }, []);
  return (
    <div className='lobby-container'>
      <h4 className='container-title'>Pokemon Trainers in Chat</h4>
      <div className='lobby'>
        {lobbyStatus.map((obj) => (
          <div className='user'>
            <div
              className={`avatar ${obj.ready === true ? "ready" : "nready"}`}
            >
              <img src={obj.avatar} />
            </div>

            <div className={`name ${obj.id === myId ? "me" : "them"}`}>
              {obj.id === myId ? "You" : obj.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
