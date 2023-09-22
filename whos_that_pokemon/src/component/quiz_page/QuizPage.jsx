import React from "react";
import "./quizpage.css";
import Countdown from "./timer_page/Countdown";
export default function QuizPage() {
  return (
    <>
      <Countdown prop={{ time: 10, goTo: "nowhere" }} />
      <h1 className='quiz-title'>Quiz</h1>
    </>
  );
}
