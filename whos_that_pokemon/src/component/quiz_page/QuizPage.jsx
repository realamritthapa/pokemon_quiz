import React, { useEffect, useState } from "react";
import "./quizpage.css";
import { socket } from "../../services/socket";
import Countdown from "./timer_page/Countdown";
import PicturePage from "./picture_page/picturePage";
import OptionPage from "./option_page/OptionPage";
import { useNavigate } from "react-router-dom";
export default function QuizPage() {
  const [questionSet, SetQuestionSet] = useState(null);
  const [questionRecieved, SetQuestionRecieved] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reveal, SetReveal] = useState(false);
  const [score, SetScore] = useState(0);

  useEffect(() => {
    const handleQuizQuestions = (arg) => {
      if (!questionRecieved) {
        SetQuestionSet(arg);
        setTimeout(() => {
          SetQuestionRecieved(true);
        }, 1000);
      }
    };

    socket.on("quizQuestions", handleQuizQuestions);

    // Cleanup function
    return () => {
      socket.off("quizQuestions", handleQuizQuestions);
    };
  }, []);
  const navigate = useNavigate();
  const nextQuestion = () => {
    // SetReveal(true);
    setTimeout(() => {
      if (currentIndex < questionSet.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        socket.emit("result");
        navigate("/results");
      }
      SetReveal(false);
    }, 1000);
  };
  if (questionRecieved) {
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
                SetScoreState: SetScore,
                quizScore: score,
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
        <div className='poke-gif'>
          <img src='/assets/poke.gif' />
        </div>
      )}
    </>
  );
}
