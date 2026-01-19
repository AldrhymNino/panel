import { DndContext, DragOverlay } from "@dnd-kit/core";
import StageWorkersColumn from "./StageWorkersColumn";
import WorkersPoolColumn from "./WorkersPoolColumn";
import WorkerCardOverlay from "./WorkerCardOverlay";

import { useState } from "react";
import "../styles/stage-workers.css";
import { useStageWorkers } from "../context/StageWorkersContext";

function StageWorkersPanel({ handleDragEnd, isVisible }) {
  const [search, setSearch] = useState("");
  const [activeWorker, setActiveWorker] = useState(null);

  const { stageColumns, stages } = useStageWorkers();

  return (
    <DndContext
      onDragStart={(event) => {
        setActiveWorker(event.active.id);
      }}
      onDragEnd={(event) => {
        handleDragEnd(event);
        setActiveWorker(null);
      }}
      onDragCancel={() => setActiveWorker(null)}
    >
      {/* PANEL */}
      <div className={`stage-workers-panel ${isVisible && "show"}`}>
        {/* POOL DE TRABAJADORES */}
        <WorkersPoolColumn
            workers={stages.pool}
            search={search}
            setSearch={setSearch}
        />

        {/* COLUMNAS DE STAGE */}
        {stageColumns.map((col) => (
            <StageWorkersColumn
              key={col.key}
              stageKey={col.key}
              label={col.label}
              workers={stages[col.key]}
            />
          )
        )}
      </div>

      {/* OVERLAY (SE RENDERIZA POR ENCIMA DE TODO) */}
      <DragOverlay>
        {activeWorker ? (
          <WorkerCardOverlay name={activeWorker.split("|")[1]} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default StageWorkersPanel;
