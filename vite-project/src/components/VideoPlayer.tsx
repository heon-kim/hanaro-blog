import { useRef } from "react";
// import "./App.css";

function VideoPlayer() {
  // 여기에 useRef 훅을 사용하여 video 요소를 참조할 변수를 선언하세요.
  const videoRef = useRef<HTMLVideoElement>(null);
  const togglePlayPause = () => {
    // 여기에 video 요소의 재생 및 일시 정지를 구현하세요.
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="400"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls={false}
      ></video>
      <button onClick={togglePlayPause}>Play/Pause</button>
    </div>
  );
}

export default VideoPlayer;
