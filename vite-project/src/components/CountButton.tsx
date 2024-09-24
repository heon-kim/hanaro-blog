/**
 * 버튼을 클릭할 때마다 count 상태를 증가시키고, 이전 버튼 클릭수를 유지해야 합니다.
 * useRef를 사용하여 이전 클릭수를 저장하고, 버튼을 클릭할때마다 콘솔에 현재 클릭수와
 * 이전 클릭수를 출력하세요
 */

import { useState, useRef } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);
  // 여기에 useRef 훅을 사용하여 이전 클릭 수를 저장할 참조 변수를 선언하세요.

  const handleClick = () => {
    // 여기에 이전 클릭 수를 업데이트하고, 콘솔에 현재 및 이전 클릭 수를 출력하는 코드를 작성하세요.
    console.log(`이전 카운트 ${prevCountRef.current}`);
    setCount(count + 1);

    prevCountRef.current = count + 1;
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default ClickCounter;
