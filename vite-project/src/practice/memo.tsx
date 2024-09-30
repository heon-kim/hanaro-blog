// App.tsx
import React from "react";

interface ChildComponentProps {
  onClick: () => void;
}

const ChildComponent = React.memo(({ onClick }: ChildComponentProps) => {
  console.log("ChildComponent 렌더링");
  return <button onClick={onClick}>Click Me</button>;
});

function ParentComponent() {
  const [count, setCount] = React.useState(0);

  // 새로운 함수가 매번 생성됨
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}

export default ParentComponent;
