/**
 * 버튼을 클릭하면 1초마다 숫자가 증가하는 타이머를 시작하고,
 * 다른 버튼을 클릭하면 타이머를 정지합니다.
 * useRef를 사용해서 ID를 저장하고, 타이머를 시작하거나 중지하는 기능을 구현
 */

import { useState, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  // useRef 훅을 사용하여 타이머 ID를 저장할 변수를 선언
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  //setInterval로 생성된 타이머 객체를 저장하는 ref,초기값은 null
  const handleStart = () => {
    if (!timerRef.current) {
      // 타이머가 실행 중이 아닐 때만 타이머 시작
      timerRef.current = setInterval(() => {
        setTime((prevCount) => prevCount + 1);
      }, 1000); // 1초마다 count 증가
    }
  };

  const handleStop = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current); // 타이머 정지
      //timerRef.current에 저장된 타이머 ID를 사용하여 정지
      timerRef.current = null; // 타이머 ID 초기화, 나중에 다시 startTimer가 실행되도록
    }
  };

  return (
    <div>
      <p>Current Time: {time}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Timer;
