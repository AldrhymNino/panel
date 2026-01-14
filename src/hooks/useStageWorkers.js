import { useState, useCallback } from "react";

const ALL_WORKERS = [
  "Juan Alvarez Cortes",
  "Mario Lopez Castillo",
  "Luisa Maria Quimbayo",
  "Andres Ramirez Paz",
  "Santiago Salazar Rivera",
  "Omar Castillo Paz",
];

const INITIAL_STAGES = {
  pool: ALL_WORKERS,
  corte: [],
  dobles: [],
  soldadura: [],
  pintura: [],
  ensamble: [],
};

export function useStageWorkers() {
  const [stages, setStages] = useState(INITIAL_STAGES);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  const handleDragEnd = useCallback(({ active, over }) => {
    if (!over) return;
    if (active.id === over.id) return;

    const [fromStage, worker] = active.id.split("|");
    const toStage = over.id;

    if (!fromStage || !toStage) return;

    setStages((prev) => {
      const next = { ...prev };

      // 👉 SI VIENE DEL POOL: COPIA
      if (fromStage === "pool") {
        if (!next[toStage].includes(worker)) {
          next[toStage] = [...next[toStage], worker];
        }
        return next;
      }

      // 👉 SI VIENE DE OTRO STAGE: MOVER
      next[fromStage] = next[fromStage].filter((w) => w !== worker);

      if (!next[toStage].includes(worker)) {
        next[toStage] = [...next[toStage], worker];
      }

      return next;
    });
  }, []);

  return {
    stages, // { pool, corte, dobles, ... }
    visible, // boolean (mostrar / ocultar)
    toggleVisible, // botón del header
    handleDragEnd, // DND SOLO de workers
  };
}
