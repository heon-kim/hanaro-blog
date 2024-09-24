import { useRef, useState } from "react";

function TextInputColorChanger() {
  const [text, setText] = useState("");

  // 여기에 useRef 훅을 사용하여 p 요소의 배경색을 저장할 변수를 선언하세요.
  const myRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    // 여기에 텍스트 길이에 따라 p 요소의 배경색을 변경하세요.
    const input = myRef.current;
    if (input && text.length > 5) {
      input.style.color = "orange";
    }
  };

  return (
    <div>
      <input
        ref={myRef}
        type="text"
        value={text}
        onChange={handleInputChange}
      />
      <p style={{ padding: "10px" }}>ColorChanger-Text Length: {text.length}</p>
    </div>
  );
}

export default TextInputColorChanger;
