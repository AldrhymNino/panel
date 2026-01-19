import { useDroppable } from "@dnd-kit/core"
import WorkerCard from "./WorkerCard"
import Search from "./Search"

function WorkersPoolColumn({ workers, search, setSearch }) {
  const { setNodeRef } = useDroppable({ id: "pool" })

  const filtered = workers.filter(w =>
    w.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div ref={setNodeRef} className="stage-workers-column pool">
      <div className="stage-workers-header header-pool">
        <div className="stage-workers-header-title">
            <span>TRABAJADORES</span>
            <span className="stage-workers-count">{filtered.length}</span>
        </div>
        <Search searchTerm={search} setSearchTerm={setSearch} placeholder={"Buscar Trabajador"} />
      </div>


      <div className="stage-workers-list">
        {filtered.map(worker => (
          <WorkerCard
            key={worker}
            id={`pool|${worker}`}
            name={worker}
          />
        ))}
      </div>
    </div>
  )
}

export default WorkersPoolColumn
