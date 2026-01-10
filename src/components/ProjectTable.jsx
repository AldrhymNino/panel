import { DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Users } from "lucide-react";

import { stageColumns } from "../data/projects.js";
import ProjectItem from "./ProjectItem.jsx";

import "../styles/project-table.css";

function ProjectTable({ handleDragEnd, filtered }) {
  return (
    <div className="table-container">
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext
          items={filtered.map((p) => p.id)}
          strategy={verticalListSortingStrategy}
        >
          {/* TABLE */}
          <div className="project-table">
            {/* HEADER */}
            <div className="project-header">
              <div className="col-number">#</div>

              <div className="col-project">
                PROYECTO & CLIENTE
                <Users size={14} />
              </div>

              {stageColumns.map((col) => (
                <div key={col.key} className="col-stage">
                  {col.label}
                  <span className="workers-count">
                    <Users size={12} />
                    {col.workers}
                  </span>
                </div>
              ))}
            </div>

            {/* BODY */}
            <div className="project-body">
              {filtered.map((project) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default ProjectTable;
