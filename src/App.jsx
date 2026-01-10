import { Filter } from "lucide-react"

import Header from "./components/Header.jsx"
import FilterTabs from "./components/FilterTabs.jsx"
import ProjectTable from "./components/ProjectTable.jsx"
import Search from "./components/Search.jsx"

import { useProjects } from "./hooks/useProjects.js"

import "./styles/app.css";

function App() {
  const {
    searchTerm,
    setSearchTerm,
    activeFilter,
    setActiveFilter,
    filterCounts,
    filtered,
    handleDragEnd
  } = useProjects()

  return (
    <div className="app">
      <Header showModal={() => document.getElementById("new-project-modal").showModal()} />

      <main className="main-content">
        <div className="page-header">
          <div className="title-section">
            <h1>Tablero de producción</h1>
            <p>
              Gestión de flujo de trabajo en tiempo real. Arrastra las filas para reacomodar la prioridad de fabricación
              de los proyectos.
            </p>
          </div>
          <div className="header-actions">
            <button className="btn-secondary">
              <Filter />
              Filtros
            </button>
            <button className="btn-primary">
              + Nuevo Proyecto
            </button>
          </div>
        </div>

        <div className="search-filter-bar">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} counts={filterCounts} />
        </div>

        <ProjectTable filtered={filtered} handleDragEnd={handleDragEnd} />
      </main>
    </div>
  )
}

export default App
