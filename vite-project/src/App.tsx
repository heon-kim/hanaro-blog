import { useState } from "react";
import My from "./components/My";
import FocusInput from "./components/FocusInput";
import PreventTyping from "./components/StopTyping";
import "./App.css";

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

  return (
    <div className="app-container">
      <FocusInput></FocusInput>
      <PreventTyping></PreventTyping>
      <My
        session={session}
        login={login}
        logout={logout}
        removeCartItem={removeCartItem}
      ></My>
    </div>
  );
}

export default App;
