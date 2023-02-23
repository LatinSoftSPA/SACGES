import { DonutChart, Card, Title } from "@tremor/react";

import { data } from "../../data";

const colores = ["yellow", "green", "rose", "cyan", "indigo"];
const ChartDonut = () => {
  return (
    <Card>
      <Title>Ejecutadas</Title>
      <DonutChart
        data={data}
        category="ejecutadas"
        dataKey="titulo"
        marginTop="mt-6"
        colors={colores}
      />
    </Card>
  );
};

export default ChartDonut;
