import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

import StatusCell from "./StatusCell";
import { stageColumns } from "../data/projects";

const ProjectItem = ({ project }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: project.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  };

  const getPriorityBadge = () => {
    switch (project.priority) {
      case "urgent":
        return <span className="priority-badge urgent">URGENTE</span>;
      case "paused":
        return <span className="priority-badge paused">PAUSADO</span>;
      default:
        return null;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="project-row"
      {...attributes}
    >
      <div className="col-number">
        <button
          className="drag-handle"
          {...listeners} // 🔑 MISMO HANDLE
          aria-label="Mover proyecto"
        >
          <GripVertical size={24} />
        </button>
      </div>

      <div className="col-project">
        <div className="project-info">
          {getPriorityBadge()}
          <span className="project-id">ID: #{project.id}</span>
          <span className="project-name">{project.name}</span>
          <span className="project-client">
            Cliente: {project.client}
          </span>
        </div>
      </div>

      {stageColumns.map((col) => (
        <StatusCell
          key={col.key}
          stage={project.stages[col.key]}
        />
      ))}
    </div>
  );
};

export default ProjectItem;
