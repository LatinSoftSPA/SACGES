import React, { useState, useEffect } from "react";
import { Block, Card } from "@tremor/react";

import AcordeonIndicadores from "./Acordeon";

import data from "./data.json";
const id_modulo = "liderazgo";

const VistaDetalle = () => {
  const [indicadores, setIndicadores] = useState([]);

  useEffect(() => {
    //TODO
    if (data[0].modulo === id_modulo) setIndicadores(data[0].indicadores);

    // const fetchData = async () => {
    //   const aux = await data.filter((obj) => obj.modulo === id_modulo);
    //   setIndicadores(aux);
    // };
    // fetchData().catch(console.error);
  }, [indicadores]);

  return (
    <Block>
      <Card>
        <AcordeonIndicadores indicadores={indicadores} />
      </Card>
    </Block>
  );
};

export default VistaDetalle;
