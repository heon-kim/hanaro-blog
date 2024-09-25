import Login from "./Login";
import Profile from "./Profile";
import Add from "./AddItem";
import { useSession } from "../context/SessionContext";

const My = () => {
  const { session, addCartItem, removeCartItem } = useSession();
  const { loginUser, cart } = session;
  return (
    <div className="my-container">
      {loginUser ? <Profile user={loginUser}></Profile> : <Login />}
      <Add addCartItem={addCartItem} />
      <ul className="cart-list">
        {cart.map((item) => (
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
