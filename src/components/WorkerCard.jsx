import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

function WorkerCard({ id, name }) {
  const { setNodeRef, attributes, listeners, transform } =
    useDraggable({ id })

  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="worker-card"
    >
      {name}
    </div>
  )
}

export default WorkerCard
