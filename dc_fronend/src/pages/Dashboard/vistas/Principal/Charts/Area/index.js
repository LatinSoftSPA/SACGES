import { Title, Card, AreaChart } from "@tremor/react";

import { data } from "../../data";

const dataFormatter = (number) => {
  return Intl.NumberFormat("cl").format(number).toString();
};

const Index = () => (
  <Card>
    <Title>Resultados</Title>
    <AreaChart
      data={data}
      categories={["planificadas", "ejecutadas"]}
      dataKey="titulo"
      height="h-72"
      colors={["cyan", "gray"]}
      valueFormatter={dataFormatter}
      marginTop="mt-4"
    />
  </Card>
);

export default Index;
