import { useDroppable } from "@dnd-kit/core"
import WorkerCard from "./WorkerCard"

function StageWorkersColumn({ stageKey, label, workers }) {
  const { setNodeRef } = useDroppable({
    id: stageKey,
  })

  return (
    <div ref={setNodeRef} className="stage-workers-column">
      <div className="stage-workers-header">
        <span>{label}</span>
        <span className="stage-workers-count">{workers.length}</span>
      </div>

      <div className="stage-workers-list">
        {workers.map((worker) => (
          <WorkerCard
            key={worker}
            id={`${stageKey}|${worker}`}
            name={worker}
          />
        ))}
      </div>
    </div>
  )
}

export default StageWorkersColumn
