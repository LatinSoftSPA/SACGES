import React from "react";
import { ColGrid } from "@tremor/react";

import AcordeonIndicadores from "./Acordeon";

const ConvivenciaEscolar = ({ data }) => {
  return (
    <ColGrid marginTop="mt-6">
      <AcordeonIndicadores data={data} />
    </ColGrid>
  );
};

export default ConvivenciaEscolar;
