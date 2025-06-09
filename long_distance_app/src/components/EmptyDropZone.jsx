import { useDroppable } from "@dnd-kit/core";

function EmptyDropZone({ id }) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div ref={setNodeRef} className="empty-drop-zone">
      Drop here
    </div>
  );
}
export default EmptyDropZone;
