import { AccordionList, ColGrid } from "@tremor/react";
import CardsData from "../CardData";
import ItemAcordeon from "./Items";

let indicadores = [
  {
    Indicador: 1,
    titulo: "Indicador 1",
    descripcion:
      "Porcentaje anual de ejecucion de las actividades definidas en el Plan de Mejoramiento Educativo (PME) del establecimiento. (10%)",
    progreso: 43,
    ejecutadas: 35,
    planificadas: 80,
    formula: {
      calculo: "(NAE / TAP) * 100",
      glosa:
        "NAE: Numero de Actividades Ejecutadas.\n TAP: Total de Actividades Planificadas.",
    },
    medios: [
      {
        cargado: true,
        titulo: "Informe fase de implementación anual PME",
      },
      {
        cargado: false,
        titulo: "Informe Monitoreo PME",
      },
      {
        cargado: true,
        titulo: "Informe Verificación PME confeccionado por MINEDUC",
      },
    ],
  },
  {
    Indicador: 2,
    titulo: "Indicador 2",
    descripcion:
      "Diseño e Implementacion de un plan de actividades para revisar, actualizar, articular y difundir el PEI con todos los actores de la comunidad educativa (5%).",
    progreso: 65,
    ejecutadas: 21,
    planificadas: 40,
    formula: {
      calculo: "(NAE / TAP) * 100",
      glosa:
        "NAE: Numero de Actividades Ejecutadas.\n TAP: Total de Actividades Planificadas.",
    },
    medios: [
      {
        cargado: true,
        titulo: "Programas de las actividades planificadas",
      },
      {
        cargado: false,
        titulo: "Informe y acta de las actividades realizadas",
      },
      {
        cargado: false,
        titulo: "Registro de asistencia de cada actividad",
      },
      {
        cargado: true,
        titulo: "Registro fotográfico",
      },
    ],
  },
  {
    Indicador: 3,
    titulo: "Indicador 3",
    descripcion:
      "Diseño e Implementacion de un modelo de sistematizacion analisis y aplicacion de datos de la gestion escolar.",
    progreso: 13,
    ejecutadas: 10,
    planificadas: 20,
    formula: {
      calculo: "(NAEM / TAPM) * 100",
      glosa:
        "NAEM: Numero de Actividades Ejecutadas del Modelo.\n TAPM: Total de Actividades Planificadas del Modelo.",
    },
    medios: [
      {
        cargado: false,
        titulo: "Carta Gantt",
      },
      {
        cargado: false,
        titulo:
          "Otros sistemas de recolección de datos derivados de los Indicadores de eficiencia",
      },
      {
        cargado: true,
        titulo: "Evaluaciones internas y externas",
      },
      {
        cargado: false,
        titulo: "Sistema de Reconocimiento Docente",
      },
      {
        cargado: true,
        titulo: "Informe de la Agencia de Calidad",
      },
      {
        cargado: false,
        titulo: "NAPSIS",
      },
      {
        cargado: true,
        titulo: "SIGE",
      },
    ],
  },
];

const AcordeonListado = () => {
  const col = indicadores.length;

  return (
    <>
      <ColGrid numColsMd={1} numColsLg={col} gapX="gap-x-6" gapY="gap-y-6">
        <CardsData indicadores={indicadores} />
      </ColGrid>

      <ColGrid marginTop="mt-5" gapX="gap-x-12" gapY="gap-y-12">
        <AccordionList>
          {indicadores &&
            indicadores.map((i, j) => <ItemAcordeon indicador={i} key={j} />)}
        </AccordionList>
      </ColGrid>
    </>
  );
};

export default AcordeonListado;
