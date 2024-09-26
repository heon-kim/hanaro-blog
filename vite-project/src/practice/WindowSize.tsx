import { useState, useEffect } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 윈도우 크기가 변경될 때 실행되는 함수
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // 윈도우 리사이즈 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Current Window Width: {width}px</h1>
    </div>
  );
}

export default WindowSize;
