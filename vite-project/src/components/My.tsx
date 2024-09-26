import { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";
import Add from "./AddItem";
import DefaultMode from "./DefaultItem";
import EditMode from "./EditItem";
import { useSession } from "../context/SessionContext";

const My = () => {
  const { session, addCartItem, updateCartItem, removeCartItem } = useSession();
  const { loginUser, cart } = session;

  const [editId, setEditId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState("");
  const [editedPrice, setEditedPrice] = useState<number | "">("");

  const editCartItem = (itemId: number, name: string, price: number) => {
    setEditId(itemId);
    setEditedName(name);
    setEditedPrice(price);
  };

  const updateItem = () => {
    if (editId !== null) {
      updateCartItem(editId, editedName, Number(editedPrice));
      resetEditing();
    }
  };

  const cancelEdit = () => {
    resetEditing();
  };

  const resetEditing = () => {
    setEditId(null);
    setEditedName("");
    setEditedPrice("");
  };

  return (
    <div className="my-container">
      {loginUser ? <Profile /> : <Login />}
      <Add addCartItem={addCartItem} />
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            {editId === item.id ? (
              <EditMode
                editedName={editedName}
                editedPrice={editedPrice}
                updateItem={updateItem}
                cancelEdit={cancelEdit}
                setEditedName={setEditedName}
                setEditedPrice={setEditedPrice}
              />
            ) : (
              <DefaultMode
                id={item.id}
                name={item.name}
                price={item.price}
                editCartItem={editCartItem}
                removeCartItem={removeCartItem}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default My;
