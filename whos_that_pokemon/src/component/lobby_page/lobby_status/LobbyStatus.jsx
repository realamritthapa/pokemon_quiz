import React, { useEffect, useState } from "react";
import { socket } from "../../../services/socket";

export default function LobbyStatus() {
  const [lobbyStatus, setLobbyStatus] = useState([]);
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
    <div>
      {lobbyStatus.map((obj) => (
        <div>
          <img src={obj.avatar} />
          <div>{obj.name}</div>
        </div>
      ))}
    </div>
  );
}
