export const initialProjects = [
  {
    id: "PRO-2023-8847",
    name: "Estructura Metálica Nave A",
    client: "Constructora del Norte S.A.",
    priority: "urgent",
    stages: {
      corte: { status: "completed", label: "Terminado" },
      dobles: { status: "in-progress", label: "En Proceso", progress: 65 },
      soldadura: { status: "pending", label: "Pendiente" },
      pintura: { status: "waiting", label: "Espera" },
      ensamble: { status: "waiting", label: "Espera" },
    },
  },
  {
    id: "PRO-2023-88455",
    name: "Soportes Industriales Lote 5",
    client: "TechParts MX",
    priority: "normal",
    stages: {
      corte: { status: "completed", label: "Terminado" },
      dobles: { status: "completed", label: "Terminado" },
      soldadura: { status: "in-progress", label: "En Proceso", progress: 30 },
      pintura: { status: "waiting", label: "Espera" },
      ensamble: { status: "waiting", label: "Espera" },
    },
  },
  {
    id: "PRO-2023-8844",
    name: "Rejas Perimetrales Zona Sur",
    client: "Gobierno Municipal",
    priority: "paused",
    stages: {
      corte: { status: "material", label: "Material", alert: "Falta acero", progress: 20 },
      dobles: { status: "waiting", label: "Espera" },
      soldadura: { status: "waiting", label: "Espera" },
      pintura: { status: "waiting", label: "Espera" },
      ensamble: { status: "pending", label: "Pendiente" },
    },
  },
  {
    id: "PRO-2023-88444",
    name: "Escaleras de Emergencia T2",
    client: "Hospital General",
    priority: "normal",
    stages: {
      corte: { status: "completed", label: "Terminado" },
      dobles: { status: "completed", label: "Terminado" },
      soldadura: { status: "completed", label: "Terminado" },
      pintura: { status: "in-progress", label: "Pintura", progress: 50 },
      ensamble: { status: "pending", label: "Pendiente" },
    },
  },
]

export const stageColumns = [
  { key: "corte", label: "CORTE", workers: 2 },
  { key: "dobles", label: "DOBLES", workers: 3 },
  { key: "soldadura", label: "SOLDADURA", workers: 5 },
  { key: "pintura", label: "PINTURA", workers: 2 },
  { key: "ensamble", label: "ENSAMBLE", workers: 5 },
]
