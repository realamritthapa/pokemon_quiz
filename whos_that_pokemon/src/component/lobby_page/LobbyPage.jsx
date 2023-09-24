import React, { useEffect, useState } from "react";
import ChatBox from "./chat_box/ChatBox";
import { socket } from "../../services/socket";
import LobbyStatus from "./lobby_status/LobbyStatus";
import StartQuiz from "./start_quiz/StartQuiz";
import Countdown from "../quiz_page/timer_page/Countdown";
import "./lobbypage.css";
export default function LobbyPage({ data }) {
  const [readyForQuiz, setReadyForQuiz] = useState(false);
  const [fetchQuestion, setFetchQuestion] = useState(false);
  useEffect(() => {
    socket.on("roomReady", (arg) => {
      console.log("this is from lobby", arg);
      setTimeout(() => {
        console.log("in time out");
        setReadyForQuiz(arg);
      }, 3000);
    });
  }, []);
  useEffect(() => {
    if (!fetchQuestion && readyForQuiz) {
      socket.emit("quizTime");
      setFetchQuestion(true);

      console.log("why is this doing");
    }
  }, [fetchQuestion, readyForQuiz]);

  return (
    <div>
      <h1 className='lobby-title'>Lobby</h1>
      <div className='lobby-page'>
        <ChatBox data={data} />
        <div className='lobby-start'>
          {readyForQuiz ? (
            <>
              <h2>Ready??? Game will begin in...</h2>
              <Countdown prop={{ time: 3, goTo: "/quiz" }} />
            </>
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
