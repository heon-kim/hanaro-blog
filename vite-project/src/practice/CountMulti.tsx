import React, { useState, useEffect } from "react";

function CountMultiplier() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [result, setResult] = useState(1);

  useEffect(() => {
    // 비동기 작업을 처리하기 위해 비동기 함수 사용
    async function calculateResult() {
      // 0.5초 지연 후 곱셈 계산
      await new Promise((resolve) => setTimeout(resolve, 500));
      setResult(count1 * count2);
    }

    calculateResult();
  }, [count1, count2]); // count1 또는 count2가 변경될 때마다 effect가 실행됨

  return (
    <div>
      <h1>Count Multiplier</h1>
      <button onClick={() => setCount1(count1 + 1)}>
        Increment Count1: {count1}
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        Increment Count2: {count2}
      </button>
      <p>Result (Count1 * Count2): {result}</p>
    </div>
  );
}

export default CountMultiplier;
