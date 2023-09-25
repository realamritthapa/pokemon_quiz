import React, { useEffect, useState } from "react";
import "./quizpage.css";
import { socket } from "../../services/socket";
import Countdown from "./timer_page/Countdown";
import PicturePage from "./picture_page/picturePage";
import OptionPage from "./option_page/OptionPage";
export default function QuizPage() {
  const [questionSet, SetQuestionSet] = useState(null);
  const [questionRecieved, SetQuestionRecieved] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reveal, SetReveal] = useState(false);

  useEffect(() => {
    const handleQuizQuestions = (arg) => {
      console.log("i am have recieved", arg);
      if (!questionRecieved) {
        SetQuestionSet(arg);
        SetQuestionRecieved(true);
      }
    };
    console.log(questionSet, questionRecieved, currentIndex, reveal);

    socket.on("quizQuestions", handleQuizQuestions);

    // Cleanup function
    return () => {
      socket.off("quizQuestions", handleQuizQuestions);
    };
  }, []);
  const nextQuestion = () => {
    // SetReveal(true);
    setTimeout(() => {
      if (currentIndex < questionSet.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        console.log("All questions done!");
      }
      SetReveal(false);
    }, 3000);
  };
  if (questionRecieved) {
    console.log(questionSet);
  }

  return (
    <>
      <h1 className='quiz-title'>Quiz</h1>
      {questionRecieved ? (
        <div className='quiz-page'>
          <div className='quiz-container'>
            {" "}
            <PicturePage
              prop={{ img: questionSet[currentIndex].img, toReveal: reveal }}
            />
            <OptionPage
              prop={{
                options: questionSet[currentIndex].options,
                correctAnswer: questionSet[currentIndex].correctAnswer,
                SetRevealState: SetReveal,
              }}
            />
          </div>
          <div className='timer'>
            <Countdown
              prop={{ time: 10, goTo: "nowhere", onComplete: nextQuestion }}
            />
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
