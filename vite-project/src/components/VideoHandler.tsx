import { useRef, forwardRef, useImperativeHandle } from "react";

interface VideoHandle {
  play: () => void;
  pause: () => void;
}

const VideoPlayer = forwardRef<VideoHandle>((_, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // 부모 컴포넌트에 노출할 함수 정의
  useImperativeHandle(ref, () => ({
    play: () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    },
    pause: () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    },
  }));

  return (
    <video ref={videoRef} width="400" controls>
      <source
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      />
      Your browser does not support HTML5 video.
    </video>
  );
});

// 2. 부모 컴포넌트 정의
function VideoHandler() {
  const videoRef = useRef<VideoHandle>(null);

  return (
    <div>
      <h2>Video Control with forwardRef</h2>
      {/* 3. 비디오 제어 버튼 */}
      <button onClick={() => videoRef.current?.play()}>Play Video</button>
      <button onClick={() => videoRef.current?.pause()}>Pause Video</button>
      {/* 4. 부모 컴포넌트에서 자식 컴포넌트에 ref 전달 */}
      <VideoPlayer ref={videoRef} />
    </div>
  );
}

export default VideoHandler;
