import { useState } from "react";
import My from "./components/My";
import "./App.css";

interface User {
  id: number;
  name: string;
  age: number;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface Session {
  loginUser: User | null;
  cart: CartItem[];
}

const SampleSession: Session = {
  loginUser: { id: 1, name: "Hong", age: 34 },
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
  ],
};

function App() {
  const [session, setSession] = useState(SampleSession);

  const logout = () => {
    setSession({
      ...session,
      loginUser: null,
    });
  };

  return (
    <div className="app-container">
      <My session={session} logout={logout}></My>
    </div>
  );
}

export default App;
