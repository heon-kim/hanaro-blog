import React, { useRef, useState } from "react";

function MouseOverComponent() {
  // 여기에 useRef 훅을 사용하여 div 요소를 참조할 변수를 선언하세요.
  const myRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => {
    // 여기에 div 요소의 텍스트를 "Mouse Over!"로 변경하는 코드를 작성하세요.
    const box = myRef.current;

    if (box) {
      box.textContent = "Mouse Over!";
    }
  };

  const handleMouseOut = () => {
    // 여기에 div 요소의 텍스트를 "Mouse Out!"으로 변경하는 코드를 작성하세요.
    const box = myRef.current;

    if (box) {
      box.textContent = "Mouse Out!";
    }
  };

  return (
    <div
      ref={myRef}
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "lightgray",
        textAlign: "center",
        lineHeight: "100px",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      Hover me!
    </div>
  );
}

export default MouseOverComponent;
