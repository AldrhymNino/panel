import { Filter } from "lucide-react";

import Search from "./Search";
import FilterTabs from "./FilterTabs";
import ProjectTable from "./ProjectTable";

import { useProjects } from '../hooks/useProjects'
import { StageWorkersProvider } from "../context/StageWorkersContext";

const Main = () => {
    const {
    searchTerm,
    setSearchTerm,
    activeFilter,
    setActiveFilter,
    filterCounts,
    filtered,
    handleDragEnd
  } = useProjects();

    return (
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
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder={"Buscar por ID, Cliente o Proyecto..."} />
          <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} counts={filterCounts} />
        </div>
        <StageWorkersProvider>
          <ProjectTable filtered={filtered} handleDragEnd={handleDragEnd} />
        </StageWorkersProvider>
      </main>
    );
};

export default Main;