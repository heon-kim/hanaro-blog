import React from "react";

const DefaultMode: React.FC<{
  id: number;
  name: string;
  price: number;
  editCartItem: (id: number, name: string, price: number) => void;
  removeCartItem: (id: number) => void;
}> = ({ id, name, price, editCartItem, removeCartItem }) => (
  <>
    {name} ({price.toLocaleString()}원)
    <button onClick={() => editCartItem(id, name, price)}>수정</button>
    <button onClick={() => removeCartItem(id)}>삭제</button>
  </>
);

export default DefaultMode;
