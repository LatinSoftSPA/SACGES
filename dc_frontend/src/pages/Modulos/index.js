import React, { useEffect, useState } from "react";
import { Title, Text } from "@tremor/react";

import { useDispatch, useSelector } from "react-redux";

import VistaAyuda from "./vistas/Ayuda";
import VistaLiderazgo from "./vistas/Liderazgo";
import VistaGestionPedagogica from "./vistas/GestionPedagogica";
import VistaConvivenciaEscolar from "./vistas/ConvivenciaEscolar";
import VistaGestionRecursos from "./vistas/GestionRecursos";
import VistaResultados from "./vistas/Resultados";

import LasTabs from "./Tabs";

import actions from "../../redux/action-creators";

import data from "./data.json"; //TODO: DATA MODULOS .json to DB

const dataLiderazgo = data[0];
const dataGestionPedagogica = data[1];
const dataConvivenciaEscolar = data[2];
const dataGestionRecursos = data[3];
const dataResultados = data[4];

const { test } = actions;

const Modulos = ({ bg }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(test());
  }, []);

  const [selectedView, setSelectedView] = useState(0);
  const onValueChange = (e) => setSelectedView(e);

  const testStore = useSelector((state) => state.data);

  console.log(testStore);

  return (
    <main className={`${bg} p-6 sm:p-10`}>
      <Title color="blue" marginTop="mt-20">
        Modulos
      </Title>
      <Text color="slate" truncate={false} height="h-6">
        Sistema de Acompañamiento para la Gestión Directiva (SACGes)
      </Text>
      <section className="scrollmenu">
        <LasTabs selectedView={selectedView} onValueChange={onValueChange} />
      </section>
      {cambiarVista(selectedView)}
    </main>
  );
};

const cambiarVista = (selectedView) => {
  switch (selectedView) {
    case 1:
      return <VistaGestionPedagogica data={dataGestionPedagogica} />;
    case 2:
      return <VistaConvivenciaEscolar data={dataConvivenciaEscolar} />;
    case 3:
      return <VistaGestionRecursos data={dataGestionRecursos} />;
    case 4:
      return <VistaResultados data={dataResultados} />;
    case 5:
      return <VistaAyuda />;
    default:
      return <VistaLiderazgo data={dataLiderazgo} />;
  }
};

export default Modulos;
