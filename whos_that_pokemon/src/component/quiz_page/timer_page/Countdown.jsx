import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./countDown.css";
export default function Countdown() {
  const renderTime = ({ remainingTime }) => {
    return (
      <div className='timer-info'>
        <div className='value'>{remainingTime}</div>
      </div>
    );
  };
  return (
    <div className='timer'>
      <CountdownCircleTimer
        isPlaying
        size={100}
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}
