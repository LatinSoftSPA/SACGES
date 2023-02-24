import { useState, useEffect } from "react";
import { TabList, Tab } from "@tremor/react";

import {
  UserGroupIcon,
  SwatchIcon,
  AcademicCapIcon,
  HeartIcon,
  SquaresPlusIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";

const Tabs = ({ selectedView, onValueChange }) => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    const listado = [
      { texto: "Liderazgo", icono: AcademicCapIcon },
      { texto: "Gestión Pedagógica", icono: SwatchIcon },
      { texto: "Convivencia Escolar", icono: UserGroupIcon },
      { texto: "Gestión de Recursos", icono: SquaresPlusIcon },
      { texto: "Resultados", icono: CircleStackIcon },
      { texto: "Ayuda", icono: HeartIcon },
    ];
    setTabs(listado);
  }, []);
  return (
    <TabList
      variant="scrollable"
      defaultValue={selectedView}
      onValueChange={(e) => onValueChange(e)}>
      {tabs.map((tab, i) => {
        const { texto, icono } = tab;
        return <Tab key={i} value={i} text={texto} icon={icono} />;
      })}
    </TabList>
  );
};

export default Tabs;
