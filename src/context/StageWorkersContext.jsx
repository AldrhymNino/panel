import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

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
  ensamble1: [],
  ensamble2: [],
  ensamble3: [],
  ensamble4: [],
};

/* -------------------------------------------------------------------------- */
/*                                   CONTEXT                                  */
/* -------------------------------------------------------------------------- */

const StageWorkersContext = createContext(null);

/* -------------------------------------------------------------------------- */
/*                                  PROVIDER                                  */
/* -------------------------------------------------------------------------- */

export function StageWorkersProvider({ children }) {
  const [stages, setStages] = useState(INITIAL_STAGES);
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  const handleDragEnd = useCallback(({ active, over }) => {
    if (!over) return;
    if (active.id === over.id) return;

    const [fromStage, worker] = active.id.split("|");
    const toStage = over.id;

    if (!fromStage || !toStage) return;

    setStages((prev) => {
      const next = { ...prev };

      // 👉 DESDE POOL = COPIA
      if (fromStage === "pool") {
        if (!next[toStage].includes(worker)) {
          next[toStage] = [...next[toStage], worker];
        }
        return next;
      }

      // 👉 DESDE OTRO STAGE = MOVER
      next[fromStage] = next[fromStage].filter((w) => w !== worker);

      if (!next[toStage].includes(worker)) {
        next[toStage] = [...next[toStage], worker];
      }

      return next;
    });
  }, []);

  const stageColumns = useMemo(
    () => [
      { key: "corte", label: "CORTE", workers: stages.corte.length },
      { key: "dobles", label: "DOBLES", workers: stages.dobles.length },
      {
        key: "soldadura",
        label: "SOLDADURA",
        workers: stages.soldadura.length,
      },
      { key: "pintura", label: "PINTURA", workers: stages.pintura.length },
      { key: "ensamble", label: "ENSAMBLE", workers: stages.ensamble.length },
      { key: "ensamble1", label: "ENSAMBLE1", workers: stages.ensamble1.length },
      { key: "ensamble2", label: "ENSAMBLE2", workers: stages.ensamble2.length },
      { key: "ensamble3", label: "ENSAMBLE3", workers: stages.ensamble3.length },
      { key: "ensamble4", label: "ENSAMBLE4", workers: stages.ensamble4.length },
    ],
    [stages]
  );

  const value = {
    stages,          // { pool, corte, dobles, ... }
    stageColumns,    // columnas con contador
    visible,         // mostrar / ocultar
    toggleVisible,   // toggle del header
    handleDragEnd,   // DND workers
  };

  return (
    <StageWorkersContext.Provider value={value}>
      {children}
    </StageWorkersContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    HOOK                                    */
/* -------------------------------------------------------------------------- */

export function useStageWorkers() {
  const context = useContext(StageWorkersContext);

  if (!context) {
    throw new Error(
      "useStageWorkers debe usarse dentro de <StageWorkersProvider />"
    );
  }

  return context;
}