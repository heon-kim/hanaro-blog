import React, { useRef } from "react";

interface AddProps {
  addCartItem: (name: string, price: number) => void;
}

const Add: React.FC<AddProps> = ({ addCartItem }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const price = priceRef.current?.value;

    if (name && price) {
      addCartItem(name, parseFloat(price));
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Add Item</h2>
      <form onSubmit={handleAddItem} className="login-form">
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="name" className="login-label">
              Name
            </label>
            <input
              ref={nameRef}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="login-input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="price" className="login-label">
              Price
            </label>
            <input
              ref={priceRef}
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              className="login-input"
            />
          </div>
        </div>
        <button type="submit" className="login-button">
          Add Cart
        </button>
      </form>
    </div>
  );
};

export default Add;
