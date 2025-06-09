import React from "react";
import "../CSS/item.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Item({ id, title, image, selectMode }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <>
      <div
        ref={setNodeRef}
        {...attributes}
        style={style}
        {...listeners}
        className="Item"
      >
        {selectMode && <input className="selec" type="checkbox" />}
        <img src={image} alt={title} className="imageItem" />
      </div>
    </>
  );
}

export default Item;
