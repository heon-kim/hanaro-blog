import React from "react";
import Login from "./Login";
import Profile from "./Profile";
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

interface MyProps {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeCartItem: (id: number) => void;
}

const My: React.FC<MyProps> = ({ session, login, logout, removeCartItem }) => {
  return (
    <div className="my-container">
      {session.loginUser ? (
        <Profile user={session.loginUser} logout={logout}></Profile>
      ) : (
        <Login login={login} />
      )}
      <ul className="cart-list">
        {session.cart.map((item) => (
          <li key={item.id} className="cart-item">
            {item.name} ({item.price.toLocaleString()}원)
            <button onClick={() => removeCartItem(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default My;
