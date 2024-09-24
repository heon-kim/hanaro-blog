import React, { useRef } from "react";

function PreventTyping() {
  // 여기에 useRef 훅을 사용하여 input 요소를 참조할 변수를 선언하세요.
  const myInputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.FormEvent) => {
    // 여기에 input 요소의 입력을 방지하고 "Stop typing!" 메시지를 표시하세요.
    if (myInputRef.current) {
      alert("Stop typing!");
      e.preventDefault();
    }
  };

  return (
    <div>
      <input
        ref={myInputRef}
        type="text"
        placeholder="Try to type here..."
        onInput={handleInput}
      />
    </div>
  );
}

export default PreventTyping;
