import "../styles/filter-tabs.css"

function FilterTabs({ activeFilter, setActiveFilter, counts }) {
  const filters = [
    { key: "all", label: "Todos", count: counts.all },
    { key: "highPriority", label: "Prioridad Alta", count: counts.highPriority },
    { key: "paused", label: "En Pausa", count: counts.paused },
    { key: "completed", label: "Completados", count: counts.completed },
  ]

  return (
    <div className="filter-tabs">
      {filters.map((filter) => (
        <button
          key={filter.key}
          className={`filter-tab ${activeFilter === filter.key ? "active" : ""}`}
          onClick={() => setActiveFilter(filter.key)}
        >
          {filter.label} ({filter.count})
        </button>
      ))}
    </div>
  )
}

export default FilterTabs
