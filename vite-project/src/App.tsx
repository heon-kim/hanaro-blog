import My from "./components/My";
import "./App.css";
import { SessionProvider } from "./context/SessionContext";

import Theme from "./practice/Theme";
import TextArea from "./practice/TextArea";
import VideoHandler from "./practice/VideoHandler";
import ModalParentComponent from "./practice/Modal";
import MouseOverComponent from "./practice/MouseHandle";
import MoveBox from "./practice/MoveBox";
import Timer from "./practice/Timer";
import AnimatedBox from "./practice/AnimatedBox";
import FocusInput from "./practice/FocusInput";
import PreventTyping from "./practice/StopTyping";
import TextInputColorChanger from "./practice/ColorChange";
import Language from "./practice/Language";

function App() {
  return (
    <div className="app-container">
      <SessionProvider>
        <My />
      </SessionProvider>

      <Language />
      <Theme />
      <TextArea />
      <VideoHandler />
      <ModalParentComponent />
      <MouseOverComponent />
      <TextInputColorChanger />
      <MoveBox />
      <Timer />
      <AnimatedBox />
      <FocusInput />
      <PreventTyping />
    </div>
  );
}

export default App;
