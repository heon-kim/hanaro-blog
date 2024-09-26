import React, { useState, useEffect } from "react";

function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // 스크롤 시 호출되는 함수
    const handleScroll = () => {
      setScrollY(window.scrollY); // 현재 스크롤 위치를 상태로 업데이트
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 빈 배열로 설정하여 컴포넌트 마운트 시 한 번만 실행

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <h1>Scroll Tracker</h1>
      <p>Current Scroll Y: {scrollY}px</p>
      <p>Scroll down to see the change...</p>
    </div>
  );
}

export default ScrollTracker;
