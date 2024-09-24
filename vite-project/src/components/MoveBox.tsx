import { useRef } from "react";

function AnimatedPositionBox() {
  // 여기에 useRef 훅을 사용하여 Box 요소의 위치를 저장할 변수를 선언하세요.
  const boxRef = useRef<HTMLInputElement>(null);
  const positionRef = useRef(0);

  const moveBox = () => {
    // 여기에 Box 요소를 오른쪽으로 100px 이동시키는 애니메이션을 구현하세요.
    const box = boxRef.current;
    if (box) {
      // 현재 위치에서 100px 이동
      positionRef.current += 100;
      box.style.transform = `translateX(${positionRef.current}px)`;
      box.style.transition = "transform 0.5s ease-in-out";
    }
  };

  return (
    <div>
      <div
        ref={boxRef}
        className="box"
        style={{ width: "100px", height: "100px", backgroundColor: "orange" }}
      ></div>
      <button onClick={moveBox}>Move Box</button>
    </div>
  );
}

export default AnimatedPositionBox;
