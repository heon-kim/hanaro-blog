import { useRef } from "react";
function FocusInput() {
  // useRef를 사용하여 참조 객체 생성
  const myInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // current 프로퍼티를 통해 input 요소에 접근
    if (myInputRef.current) {
      myInputRef.current.focus(); // input 요소에 포커스 설정
    }
  };

  return (
    <div>
      <input
        ref={myInputRef}
        type="text"
        placeholder="Click the button to focus"
      />
      <button onClick={handleClick}>Focus the Input</button>
    </div>
  );
}

export default FocusInput;
