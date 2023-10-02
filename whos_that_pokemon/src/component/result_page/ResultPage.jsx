import React, { useEffect, useState } from "react";
import { socket } from "../../services/socket";
import "./resultPage.css";
export default function ResultPage() {
  const [players, SetPlayers] = useState(null);
  useEffect(() => {
    socket.on("allScores", (data) => {
      console.log(data);
      SetPlayers(data);
    });
  }, []);

  return (
    <>
      <h1 className='result-title'>Results</h1>
    </>
  );
}
