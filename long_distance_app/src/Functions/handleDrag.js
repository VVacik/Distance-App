import { arrayMove } from "@dnd-kit/sortable";

export const handleDragEnd = (event, columns, setColumns) => {
  const { active, over } = event;

  if (!over || active.id === over.id) return;

  const activeId = active.id;
  const overId = over.id;

  let sourceColumn = null;
  let destinationColumn = null;

  for (const columnKey in columns) {
    if (columns[columnKey].some((item) => item.id === activeId)) {
      sourceColumn = columnKey;
    }

    if (
      columns[columnKey].some((item) => item.id === overId) ||
      columnKey === overId
    ) {
      destinationColumn = columnKey;
    }
  }

  if (!destinationColumn && (overId === "left" || overId === "right")) {
    destinationColumn = overId;
  }

  if (!sourceColumn || !destinationColumn) return;

  if (sourceColumn === destinationColumn) {
    const oldIndex = columns[sourceColumn].findIndex(
      (item) => item.id === activeId
    );
    const newIndex = columns[destinationColumn].findIndex(
      (item) => item.id === overId
    );

    if (newIndex === -1) {
      setColumns((prev) => ({
        ...prev,
        [sourceColumn]: arrayMove(
          prev[sourceColumn],
          oldIndex,
          prev[sourceColumn].length
        ),
      }));
    } else {
      setColumns((prev) => ({
        ...prev,
        [sourceColumn]: arrayMove(prev[sourceColumn], oldIndex, newIndex),
      }));
    }
  } else {
    const itemToMove = columns[sourceColumn].find(
      (item) => item.id === activeId
    );

    const newItems =
      overId === destinationColumn
        ? [itemToMove, ...columns[destinationColumn]]
        : [
            ...columns[destinationColumn].slice(
              0,
              columns[destinationColumn].findIndex((item) => item.id === overId)
            ),
            itemToMove,
            ...columns[destinationColumn].slice(
              columns[destinationColumn].findIndex((item) => item.id === overId)
            ),
          ];

    setColumns((prev) => ({
      ...prev,
      [sourceColumn]: prev[sourceColumn].filter((item) => item.id !== activeId),
      [destinationColumn]: newItems,
    }));
  }
};
