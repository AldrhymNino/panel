import { DndContext } from "@dnd-kit/core"
import { stageColumns } from "../data/projects"
import StageWorkersColumn from "./StageWorkersColumn"
import WorkersPoolColumn from "./WorkersPoolColumn"
import { useState } from "react"
import "../styles/stage-workers.css"

function StageWorkersPanel({ stages, handleDragEnd }) {
  const [search, setSearch] = useState("")

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="stage-workers-panel">
        {/* POOL */}
        <WorkersPoolColumn
          workers={stages.pool}
          search={search}
          setSearch={setSearch}
        />

        {/* STAGES */}
        {stageColumns.map(col => (
          <StageWorkersColumn
            key={col.key}
            stageKey={col.key}
            label={col.label}
            workers={stages[col.key]}
          />
        ))}
      </div>
    </DndContext>
  )
}

export default StageWorkersPanel
