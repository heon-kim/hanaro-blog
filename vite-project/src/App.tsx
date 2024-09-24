import { useState } from "react";
import My from "./components/My";
import MouseOverComponent from "./components/MouseHandle";
import MoveBox from "./components/MoveBox";
import Timer from "./components/Timer";
import AnimatedBox from "./components/AnimatedBox";
import FocusInput from "./components/FocusInput";
import PreventTyping from "./components/StopTyping";
import "./App.css";
import TextInputColorChanger from "./components/ColorChange";

interface User {
  id: number;
  name: string;
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
  loginUser: null,
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
  ],
};

function App() {
  const [session, setSession] = useState(SampleSession);

  const login = (id: number, name: string) => {
    setSession({
      ...session,
      loginUser: { id, name },
    });
  };

  const logout = () => {
    setSession({
      ...session,
      loginUser: null,
    });
  };

  const removeCartItem = (id: number) => {
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== id),
    });
  };

  const addCartItem = (name: string, price: number) => {
    const id = session.cart.length + 1;
    const newItem: CartItem = { id, name, price };
    setSession({
      ...session,
      cart: [...session.cart, newItem],
    });
  };

  return (
    <div className="app-container">
      <My
        session={session}
        login={login}
        logout={logout}
        removeCartItem={removeCartItem}
        addCartItem={addCartItem}
      ></My>
      <MouseOverComponent></MouseOverComponent>
      <TextInputColorChanger></TextInputColorChanger>
      <MoveBox></MoveBox>
      <Timer></Timer>
      <AnimatedBox></AnimatedBox>
      <FocusInput></FocusInput>
      <PreventTyping></PreventTyping>
    </div>
  );
}

export default App;
