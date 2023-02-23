import React, { useState, useEffect } from "react";
import { Title, Text, TabList, Tab } from "@tremor/react";
import {
  HomeModernIcon,
  DocumentTextIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import VistaPrincipal from "./vistas/Principal";
import VistaAyuda from "./vistas/Ayuda";
import VistaDetalles from "./vistas/Detalles";

const LasTabs = ({ tabs, selectedView, onValueChange }) => {
  return (
    <TabList
      defaultValue={selectedView}
      onValueChange={(e) => onValueChange(e)}
      marginTop="mt-6">
      {tabs.map((tab, i) => {
        const { texto, icono } = tab;
        return <Tab key={i} value={i} text={texto} icon={icono} />;
      })}
    </TabList>
  );
};

const Dashboard = ({ bg }) => {
  const [tabs, setTabs] = useState([]);
  const [selectedView, setSelectedView] = useState(0);

  const onValueChange = (e) => setSelectedView(e);

  useEffect(() => {
    const data = [
      { texto: "Principal", icono: HomeModernIcon },
      { texto: "Detalles", icono: DocumentTextIcon },
      { texto: "Ayuda", icono: HeartIcon },
    ];
    setTabs(data);
  }, []);

  return (
    <main className={`${bg} p-6 sm:p-10`}>
      <Title color="blue" marginTop="mt-20">
        Dashboard
      </Title>
      <Text color="slate" truncate={false} height="h-6">
        Panel Informativos SACGes
      </Text>

      <LasTabs
        tabs={tabs}
        selectedView={selectedView}
        onValueChange={onValueChange}
      />
      {cambiarVista(selectedView)}
    </main>
  );
};

const cambiarVista = (selectedView) => {
  switch (selectedView) {
    case 1:
      return <VistaDetalles marginTop="mt-6" />;
    case 2:
      return <VistaAyuda />;
    default:
      return <VistaPrincipal />;
  }
};

export default Dashboard;
