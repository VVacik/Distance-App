import { useDroppable } from "@dnd-kit/core";
import AddItemForm from "./AddItemForm";
import { useState } from "react";
import React from "react";

function DroppableColumn({ id, children, selectMode, setSelectMode }) {
  const { setNodeRef } = useDroppable({
    id: id,
  });
  const [showForm, setShowForm] = useState(false);

  const toggleSelectMode = () => {
    setSelectMode(!selectMode);
    console.log(selectMode);
  };

  return (
    <div className="DroppableCollumn">
      <div className="essentials">
        <div className="form-toggle-wrapper">
          <button
            className="EssentailsButtons"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Hide" : "Add Item"}
          </button>
          {showForm && <AddItemForm onClose={() => setShowForm(false)} />}
        </div>

        <button className="EssentailsButtons" onClick={toggleSelectMode}>
          select items
        </button>
      </div>
      <div ref={setNodeRef} className="ItemContainer">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { selectMode })
        )}
      </div>
    </div>
  );
}
export default DroppableColumn;
