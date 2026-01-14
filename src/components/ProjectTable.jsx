import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Users, ChevronUp, ChevronDown } from "lucide-react";

import StageWorkersPanel from "./StageWorkersPanel";
import { useStageWorkers } from "../hooks/useStageWorkers";
import { stageColumns } from "../data/projects.js";
import ProjectItem from "./ProjectItem.jsx";

import "../styles/project-table.css";

function ProjectTable({ handleDragEnd, filtered }) {
  const {
    stages,
    visible,
    toggleVisible,
    handleDragEnd: handleWorkersDragEnd,
  } = useStageWorkers();

  return (
    <div className="table-container">
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext
          items={filtered.map((p) => p.id)}
          strategy={verticalListSortingStrategy}
        >
          {visible && (
            <StageWorkersPanel
              stages={stages}
              handleDragEnd={handleWorkersDragEnd}
            />
          )}

          {/* TABLE */}
          <div className="project-table">
            {/* HEADER */}
            <div className="project-header">
              <div className="col-number">#</div>

              <div className="col-project">
                PROYECTO & CLIENTE
                <button className="btn-table" onClick={toggleVisible}>
                  <Users size={14} />
                  {visible ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  )}
                </button>
              </div>

              {stageColumns.map((col) => (
                <div key={col.key} className="col-stage">
                  {col.label}
                  <span className="workers-count">
                    <button className="btn-table">
                      <Users size={12} />
                      <span className="btn-table-text">{col.workers}</span>
                    </button>
                  </span>
                </div>
              ))}
            </div>

            {/* BODY */}
            <div className="project-body">
              {filtered.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default ProjectTable;
