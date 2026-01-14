import { AlertTriangle, Check } from "lucide-react";

import "../styles/status-cell.css";
import { Circle } from "lucide-react";

function StatusCell({ stage }) {
  const { status, label, progress, alert } = stage;

  const getStatusClass = () => {
    switch (status) {
      case "completed":
        return "status-completed"
      case "in-progress":
        return "status-in-progress"
      case "pending":
        return "status-pending"
      case "waiting":
        return "status-waiting"
      case "material":
        return "status-material"
      default:
        return ""
    }
  }

  return (
    <div className="status-cell">
      <div className={`status-badge ${getStatusClass()}`}>

        {status === "material" && (
          <>
            <div className="progress-container">
              <span className="label"><AlertTriangle size={16} /> {label}</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%`, backgroundColor: 'var(--color-warning)' }}></div>
              </div>
              {alert && <span className="alert-text"> {alert}</span>}
            </div>
          </>
        )}


        {status === "completed" && (
          <div className="progress-container">
            <span className="label"><Circle size={15} style={{fill: 'var(--color-success)',width: '10px', height: '10px'}} />{label}</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%`, backgroundColor: 'var(--color-success)' }}></div>
            </div>
            {alert && <span className="alert-text">{alert}</span>}
          </div>
        )}

        {status === "in-progress" && (
          <div className="progress-container">
            <span className="label" ><Circle size={15} style={{fill: 'var(--color-primary)',width: '10px', height: '10px'}} /> {label}</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="progress-text">{progress}% completado</span>
          </div>
        )}

        {status === "waiting" && (
          <span className="label" ><Circle size={15} style={{fill: 'var(--color-gray-500)',width: '10px', height: '10px'}} />{label}</span>
        )}

        {status === "pending" && (
          <span className="label" ><Circle size={15} style={{fill: 'var(--color-gray-500)',width: '10px', height: '10px'}} />{label}</span>
        )}
      </div>
    </div>
  )
}

export default StatusCell
