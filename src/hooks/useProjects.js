import { useState, useEffect, useCallback, useMemo } from "react"
import { initialProjects } from "../data/projects.js"
import { arrayMove } from "@dnd-kit/sortable"

export function useProjects() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchTerm, setSearchTerm] = useState("")
  const [filtered, setFiltered] = useState([])
  const [activeFilter, setActiveFilter] = useState("all")

  // 🔍 FUNCIÓN DE FILTRO (CLARA Y REUTILIZABLE)
  const applyFilters = useCallback(() => {
    const term = searchTerm.toLowerCase()

    const result = projects.filter((p) => {
      // BÚSQUEDA
      if (
        term &&
        !p.id.toLowerCase().includes(term) &&
        !p.name.toLowerCase().includes(term) &&
        !p.client.toLowerCase().includes(term)
      ) {
        return false
      }

      // FILTROS
      if (activeFilter === "highPriority")
        return p.priority === "urgent"

      if (activeFilter === "paused")
        return p.priority === "paused"

      if (activeFilter === "completed")
        return Object.values(p.stages).every(
          (s) => s.status === "completed"
        )

      return true
    })

    setFiltered(result)
  }, [projects, searchTerm, activeFilter])

  // ⚡ SE EJECUTA AUTOMÁTICAMENTE
  useEffect(() => {
    applyFilters()
  }, [applyFilters])

  // 📊 CONTADORES
  const filterCounts = useMemo(() => {
    return projects.reduce(
      (acc, p) => {
        acc.all++

        if (p.priority === "urgent") acc.highPriority++
        if (p.priority === "paused") acc.paused++

        if (
          Object.values(p.stages).every(
            (s) => s.status === "completed"
          )
        ) {
          acc.completed++
        }

        return acc
      },
      { all: 0, highPriority: 0, paused: 0, completed: 0 }
    )
  }, [projects])

  // 🧲 DRAG & DROP
  const handleDragEnd = useCallback(({ active, over }) => {
    if (!over || active.id === over.id) return

    setProjects((items) => {
      const oldIndex = items.findIndex(p => p.id === active.id)
      const newIndex = items.findIndex(p => p.id === over.id)

      return arrayMove(items, oldIndex, newIndex)
    })
  }, [])

  return {
    projects,
    filtered,
    searchTerm,
    setSearchTerm,
    activeFilter,
    setActiveFilter,
    filterCounts,
    handleDragEnd
  }
}
