import React, { useState } from "react";
import "./quizpage.css";
import { socket } from "../../services/socket";
import Countdown from "./timer_page/Countdown";
export default function QuizPage() {
  const [questionSet, SetQuestionSet] = useState(null);

  return (
    <>
      <Countdown prop={{ time: 10, goTo: "nowhere" }} />
      <h1 className='quiz-title'>Quiz</h1>
    </>
  );
}
