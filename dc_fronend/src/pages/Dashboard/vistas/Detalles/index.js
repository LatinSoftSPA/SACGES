import React, { useState, useEffect } from "react";
import { Block } from "@tremor/react";

import AcordeonIndicadores from "./Acordeon";

import data from "./data.json";
const id_modulo = "liderazgo";

const VistaDetalle = () => {
  const [indicadores, setIndicadores] = useState([]);

  useEffect(() => {
    //TODO
    if (data[0].modulo === id_modulo) setIndicadores(data[0].indicadores);
  }, [indicadores]);

  return (
    <Block>
      <AcordeonIndicadores indicadores={indicadores} />
    </Block>
  );
};

export default VistaDetalle;
