import My from "./components/My";
import Nav from "./Nav";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SessionProvider } from "./context/SessionContext";

function App() {
  return (
    <SessionProvider>
      <div className="app-container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my" element={<My />} />
        </Routes>
      </div>
    </SessionProvider>
  );
}

export default App;
