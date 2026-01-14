export const initialProjects = [
  {
    id: "PRO-2023-8847",
    name: "Estructura Metálica Nave A",
    client: "Constructora del Norte S.A.",
    priority: "urgent",
    stages: {
      corte: {
        status: "completed",
        label: "Terminado",
        workers: ["Juan Alvarez", "Mario Lopez"]
      },
      dobles: {
        status: "in-progress",
        label: "En Proceso",
        progress: 65,
        workers: ["Laura Valentina"]
      },
      soldadura: {
        status: "pending",
        label: "Pendiente",
        workers: []
      },
      pintura: {
        status: "waiting",
        label: "Espera",
        workers: []
      },
      ensamble: {
        status: "waiting",
        label: "Espera",
        workers: []
      },
    },
  },
  {
    id: "PRO-2023-88455",
    name: "Soportes Industriales Lote 5",
    client: "TechParts MX",
    priority: "normal",
    stages: {
      corte: {
        status: "completed",
        label: "Terminado",
        workers: []
      },
      dobles: {
        status: "completed",
        label: "Terminado",
        workers: []
      },
      soldadura: {
        status: "in-progress",
        label: "En Proceso",
        progress: 30,
        workers: ["Camilo Paz"]
      },
      pintura: {
        status: "waiting",
        label: "Espera",
        workers: []
      },
      ensamble: {
        status: "waiting",
        label: "Espera",
        workers: []
      },
    },
  },
  {
    id: "PRO-2023-8844",
    name: "Rejas Perimetrales Zona Sur",
    client: "Gobierno Municipal",
    priority: "paused",
    stages: {
      corte: {
        status: "material",
        label: "Material",
        alert: "Falta acero",
        progress: 20,
        workers: []
      },
      dobles: {
        status: "waiting",
        label: "Espera",
        workers: []
      },
      soldadura: {
        status: "waiting",
        label: "Espera",
        workers: []
      },
      pintura: {
        status: "waiting",
        label: "Espera",
        workers: []
      },
      ensamble: {
        status: "pending",
        label: "Pendiente",
        workers: []
      },
    },
  },
  {
    id: "PRO-2023-88444",
    name: "Escaleras de Emergencia T2",
    client: "Hospital General",
    priority: "normal",
    stages: {
      corte: {
        status: "completed",
        label: "Terminado",
        workers: []
      },
      dobles: {
        status: "completed",
        label: "Terminado",
        workers: []
      },
      soldadura: {
        status: "completed",
        label: "Terminado",
        workers: []
      },
      pintura: {
        status: "in-progress",
        label: "Pintura",
        progress: 50,
        workers: ["Andres Ramirez"]
      },
      ensamble: {
        status: "pending",
        label: "Pendiente",
        workers: []
      },
    },
  },
]

export const stageColumns = [
  { key: "corte", label: "CORTE", workers: 2 },
  { key: "dobles", label: "DOBLES", workers: 3 },
  { key: "soldadura", label: "SOLDADURA", workers: 5 },
  { key: "pintura", label: "PINTURA", workers: 2 },
  { key: "ensamble", label: "ENSAMBLE", workers: 5 },
];