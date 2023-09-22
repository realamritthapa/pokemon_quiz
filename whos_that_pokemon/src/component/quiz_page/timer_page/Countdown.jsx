import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";
import "./countDown.css";
import { useState } from "react";
export default function Countdown({ prop }) {
  const navigate = useNavigate();
  const [moveToQuiz, setMoveToQuiz] = useState(false);
  console.log(prop.goTo);

  const renderTime = ({ remainingTime }) => {
    return (
      <div className='timer-info'>
        <div className='value'>{remainingTime}</div>
      </div>
    );
  };
  if (moveToQuiz) {
    console.log("lol");
    navigate(prop.goTo);
  }
  return (
    <div className='timer'>
      <CountdownCircleTimer
        isPlaying
        size={100}
        duration={prop.time}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => {
          prop.goTo === "/quiz" ? setMoveToQuiz(true) : setMoveToQuiz(false);
          return { shouldRepeat: true, delay: 2 };
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}
