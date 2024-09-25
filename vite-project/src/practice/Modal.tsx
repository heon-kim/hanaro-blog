import { useRef, forwardRef, useImperativeHandle, useState } from "react";

// 1. 자식 컴포넌트 정의 (forwardRef와 useImperativeHandle 사용)
const Modal = forwardRef((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  // 부모 컴포넌트에 노출할 함수 정의
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "30%",
        left: "30%",
        padding: "20px",
        backgroundColor: "white",
        border: "1px solid black",
      }}
    >
      <h2>Modal Title</h2>
      <p>This is a modal content.</p>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
});

// 2. 부모 컴포넌트 정의
function ModalParentComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      {/* 3. 자식 컴포넌트에 ref 전달 */}
      <Modal ref={inputRef} />
      <button onClick={() => inputRef.current?.open()}>Open</button>
      <button onClick={() => inputRef.current?.close()}>Close</button>
    </div>
  );
}

export default ModalParentComponent;
