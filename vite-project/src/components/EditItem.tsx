import React from "react";

const EditMode: React.FC<{
  editedName: string;
  editedPrice: number | "";
  updateItem: () => void;
  cancelEdit: () => void;
  setEditedName: (value: string) => void;
  setEditedPrice: (value: number | "") => void;
}> = ({
  editedName,
  editedPrice,
  updateItem,
  cancelEdit,
  setEditedName,
  setEditedPrice,
}) => (
  <>
    <input
      type="text"
      value={editedName}
      onChange={(e) => setEditedName(e.target.value)}
    />
    <input
      type="number"
      value={editedPrice}
      onChange={(e) => setEditedPrice(Number(e.target.value) || "")}
    />
    <button onClick={updateItem}>Save</button>
    <button onClick={cancelEdit}>Cancel</button>
  </>
);

export default EditMode;
