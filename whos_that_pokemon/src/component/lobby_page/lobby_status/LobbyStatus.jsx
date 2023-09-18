import React, { useEffect, useState } from "react";
import { socket } from "../../../services/socket";
import "./lobbystatus.css";
export default function LobbyStatus() {
  const [lobbyStatus, setLobbyStatus] = useState([]);
  const myId = socket.id;
  console.log(socket.id);
  useEffect(() => {
    socket.on("lobbyStatus", (arr) => {
      setLobbyStatus(arr);
    });
  }, []);
  useEffect(() => {
    console.log("under here");
    console.log(lobbyStatus);
  }, []);
  return (
    <div className='lobby'>
      {lobbyStatus.map((obj) => (
        <div className='user'>
          <div className='avatar'>
            <img src={obj.avatar} height='120px' width='120px' />{" "}
          </div>

          <div className={`name ${obj.id === myId ? "me" : "them"}`}>
            {obj.id === myId ? "You" : obj.name}
          </div>
        </div>
      ))}
    </div>
  );
}
