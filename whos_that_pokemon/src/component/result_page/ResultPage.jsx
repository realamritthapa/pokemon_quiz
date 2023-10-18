import React, { useEffect, useState } from "react";
import { socket } from "../../services/socket";
import "./resultPage.css";
export default function ResultPage() {
  const [players, SetPlayers] = useState([
    {
      id: "dTZ6KAcz3wBuRRkOAAAB",
      name: "amrit",
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/963.png",
      score: 4,
      ready: true,
    },
    {
      id: "QTI3043WfnOrWDoJAAAD",
      name: "joe",
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/946.png",
      score: 3,
      ready: true,
    },
  ]);
  useEffect(() => {
    socket.on("allScores", (data) => {
      console.log(data);
      SetPlayers(data);
    });
  }, [players]);

  return (
    <>
      <h1 className='result-title'>Results</h1>
      <div className='result-rank'>
        <div className='result-label'>
          <div>Avatar</div>
          <div>Username</div>
          <div>Score</div>
        </div>
        {players.map((data) => (
          <div className='user-result'>
            <img src={data.avatar} width='150px' />
            <div className='user-name'>{data.name.toUpperCase()}</div>
            <div className='user-score'>{data.score} </div>
          </div>
        ))}
        <button type='button' className='btn w-25 btn-primary '>
          Play Again
        </button>
      </div>
    </>
  );
}
