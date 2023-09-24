import React, { useEffect, useState } from "react";
import "./quizpage.css";
import { socket } from "../../services/socket";
import Countdown from "./timer_page/Countdown";
import PicturePage from "./picture_page/picturePage";
export default function QuizPage() {
  const [questionSet, SetQuestionSet] = useState(null);
  const [questionRecieved, SetQuestionRecieved] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    socket.on("quizQuestions", (arg) => {
      if (!questionRecieved) {
        SetQuestionSet(arg);
        SetQuestionRecieved(true);
      }
    });
  }, [questionRecieved]);
  const nextQuestion = () => {
    setTimeout(() => {
      if (currentIndex < questionSet.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        console.log("All questions done!");
      }
    }, 3000);
  };
  if (questionRecieved) {
    console.log(questionSet);
  }

  return (
    <>
      <h1 className='quiz-title'>Quiz</h1>
      {questionRecieved ? (
        <div>
          {" "}
          <PicturePage prop={{ img: questionSet[currentIndex].img }} />
          <Countdown
            prop={{ time: 10, goTo: "nowhere", onComplete: nextQuestion }}
          />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
