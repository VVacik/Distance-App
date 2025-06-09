import React from "react";
import "../CSS/AddItemForm.css";
import { useState } from "react";

import { Item_Post } from "../Api/Item_Post";

const AddItemForm = ({ onClose }) => {
  const [name, Setname] = useState("");
  const [img, SetImg] = useState("");
  const [wardrobeID, setWardrobeId] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedItem = await Item_Post(name, img, wardrobeID);
      console.log("Dodano item:", addedItem);
      onClose();
    } catch (error) {
      console.error("Błąd przy dodawaniu: ", error);
      alert("Nie udało się dodać itemu");
    }
  };

  return (
    <div className="overlay-form">
      <form onSubmit={handleSubmit}>
        <h3>Add new Item</h3>
        <input
          type="text"
          onChange={(e) => SetName(e.target.value)}
          value={name}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={img}
          onChange={(e) => SetImg(e.target.value)}
          placeholder="Img name"
          required
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
