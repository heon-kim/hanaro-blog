import React, { useState, useEffect } from "react";

function ClickCounter() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // clickCount 상태가 변경될 때마다 콘솔에 메시지 출력
    console.log(`Click count is now ${clickCount}`);
  }, [clickCount]); // 의존성 배열에 clickCount를 추가하여, clickCount가 변경될 때마다 이 effect가 실행됩니다.

  return (
    <div>
      <h1>Click Counter</h1>
      <button onClick={() => setClickCount(clickCount + 1)}>Click me</button>
      <p>You have clicked {clickCount} times</p>
    </div>
  );
}

export default ClickCounter;
