import My from "./components/My";
import "./App.css";
import { SessionProvider } from "./context/SessionContext";

import ClickCounter from "./practice/CountClick";
import TodoComponent from "./practice/Todo";
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
import WindowSize from "./practice/WindowSize";
import SearchFilter from "./practice/Filter";
import UserToggle from "./practice/Toggle";
import CountMultiplier from "./practice/CountMulti";
import ScrollTracker from "./practice/Scroll";

function App() {
  return (
    <div className="app-container">
      <SessionProvider>
        <My />
      </SessionProvider>

      <ScrollTracker></ScrollTracker>
      <CountMultiplier></CountMultiplier>
      <UserToggle></UserToggle>
      <SearchFilter></SearchFilter>
      <WindowSize></WindowSize>
      <ClickCounter></ClickCounter>
      <TodoComponent></TodoComponent>
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
