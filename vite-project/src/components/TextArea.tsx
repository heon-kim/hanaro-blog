import { useRef, forwardRef, useImperativeHandle, useState } from "react";

interface sizeHandle {
  increaseHeight: () => void;
  decreaseHeight: () => void;
}

// 1. 자식 컴포넌트 정의 (forwardRef 사용)
const ResizableTextarea = forwardRef<sizeHandle>((_, ref) => {
  const [height, setHeight] = useState(50);
  const textareaRef = useRef(null);

  // 부모 컴포넌트에 노출할 함수 정의
  useImperativeHandle(ref, () => ({
    increaseHeight: () => {
      setHeight((prevHeight) => prevHeight + 20);
    },
    decreaseHeight: () => {
      setHeight((prevHeight) =>
        prevHeight > 20 ? prevHeight - 20 : prevHeight,
      );
    },
  }));

  return (
    <textarea
      ref={textareaRef}
      style={{ width: "300px", height: `${height}px` }}
      placeholder="Type something..."
    />
  );
});

// 2. 부모 컴포넌트 정의
function TextArea() {
  const textareaRef = useRef<sizeHandle>(null);

  return (
    <div>
      <h2>Resizable Textarea with forwardRef</h2>
      {/* 3. 부모 컴포넌트에서 자식 컴포넌트의 높이 제어 */}
      <button onClick={() => textareaRef.current?.increaseHeight()}>
        Increase Height
      </button>
      <button onClick={() => textareaRef.current?.decreaseHeight()}>
        Decrease Height
      </button>
      <br />
      <ResizableTextarea ref={textareaRef} />
    </div>
  );
}

export default TextArea;
