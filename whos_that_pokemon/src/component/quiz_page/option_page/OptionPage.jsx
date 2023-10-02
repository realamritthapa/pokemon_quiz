import React, { useEffect, useState } from "react";
import "./optionpage.css";
import { socket } from "../../../services/socket";
export default function OptionPage({ prop }) {
  const [options, SetOptions] = useState(null);
  const [correctAnswer, SetCorrectAnswer] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (prop.options) {
      setAnswered(false);
      SetOptions(prop.options);
      SetCorrectAnswer(prop.correctAnswer);
    }
  }, [prop.options]);

  useEffect(() => {
    if (answered) {
      prop.SetRevealState(true);
    }
  }, [answered]);

  const handleClick = (event) => {
    event.preventDefault();
    const chosenAnswer = event.target.value;
    setSelectedOption(chosenAnswer);
    setAnswered(true);
    if (chosenAnswer === correctAnswer) {
      socket.emit("score");
      let score = prop.quizScore;
      prop.SetScoreState(++score);
      console.log("Correct Answer!");
      // Handle correct answer (e.g. show feedback, load next question, etc.)
    } else {
      console.log("Wrong Answer!");
      // Handle incorrect answer (e.g. show feedback, subtract points, etc.)
    }
  };
  console.log("this is answered", answered);
  const getButtonClassName = (choice) => {
    if (answered) {
      if (choice === selectedOption && choice === correctAnswer) {
        return "option-btn correct";
      } else if (choice === selectedOption) {
        return "option-btn wrong";
      } else if (choice === correctAnswer) {
        return "option-btn correct";
      } else {
        return "option-btn";
      }
    }
    return "option-btn";
  };

  return (
    <div className='option-container'>
      {options &&
        options.map((choice, index) => (
          <button
            className={getButtonClassName(choice)}
            key={index}
            value={choice}
            onClick={handleClick}
            disabled={answered}
          >
            {choice}
          </button>
        ))}
    </div>
  );
}
