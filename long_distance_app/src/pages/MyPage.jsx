import { React, useEffect, useState } from "react";
import { getItems } from "../Api/fakestore";
import Item from "../components/item";
import DroppableColumn from "../components/DroppableColumn";
import "../CSS/MyPage.css";
import EmptyDropZone from "../components/EmptyDropZone";
import { closestCorners, DndContext, DragOverlay } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import AddItemForm from "../components/AddItemForm";

import { handleDragEnd as onItemDragEnd } from "../Functions/handleDrag";

function MyPage() {
  const [columns, setColumns] = useState({
    left: [],
    right: [],
  });
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectMode, setSelectMode] = useState(false);

  useEffect(() => {
    const LoadItems = async () => {
      try {
        const item = await getItems();
        const mid = Math.ceil(item.length / 2);
        setItems(item);

        setColumns({
          left: item.slice(0, mid),
          right: item.slice(mid),
        });
      } catch (err) {
        console.log(err);
        setError("Failed to Load");
      } finally {
        setLoading(false);
      }
    };

    LoadItems();
  }, []);

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  return (
    <main>
      <div className="Controller_Panel"></div>
      <DndContext
        onDragEnd={(event) =>
          selectMode ? null : onItemDragEnd(event, columns, setColumns)
        }
        onDragStart={selectMode ? null : handleDragStart}
        collisionDetection={closestCorners}
      >
        <DroppableColumn
          id="left"
          selectMode={selectMode}
          setSelectMode={setSelectMode}
        >
          <SortableContext
            items={
              columns.left.length === 0
                ? ["left"]
                : columns.left.map((item) => item.id)
            }
            strategy={rectSortingStrategy}
          >
            {columns.left.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                selectMode={selectMode}
              />
            ))}

            {columns.left.length === 0 && <EmptyDropZone id="left" />}
          </SortableContext>
        </DroppableColumn>

        <DroppableColumn
          id="right"
          selectMode={selectMode}
          setSelectMode={setSelectMode}
        >
          <SortableContext
            items={
              columns.right.length === 0
                ? ["right"]
                : columns.right.map((item) => item.id)
            }
            strategy={rectSortingStrategy}
          >
            {columns.right.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                selectMode={selectMode}
              />
            ))}
            {columns.right.length === 0 && <EmptyDropZone id="right" />}
          </SortableContext>
        </DroppableColumn>
        <DragOverlay>
          {activeId ? (
            <Item
              {...items.find((item) => item.id === activeId)}
              id={activeId}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </main>
  );
}
export default MyPage;
