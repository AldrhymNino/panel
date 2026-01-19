import { useDraggable } from "@dnd-kit/core"

function WorkerCard({ id, name }) {
  const {
    setNodeRef,
    attributes,
    listeners,
    isDragging,
  } = useDraggable({ id })

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="worker-card"
      style={{
        opacity: isDragging ? 0 : 1,   // se oculta
      }}
    >
      {name}
    </div>
  )
}

export default WorkerCard
