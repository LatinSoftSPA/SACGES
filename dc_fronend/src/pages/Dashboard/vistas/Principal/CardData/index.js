import {
  BadgeDelta,
  Block,
  Card,
  Flex,
  Metric,
  CategoryBar,
  Legend,
  Text,
} from "@tremor/react";

import { data } from "../data";

const laCard = (item, i) => {
  const minimo_exigido = 45;
  const { titulo, ejecutadas, planificadas, url } = item;
  const calculo = Math.floor((ejecutadas / planificadas) * 100);

  return (
    <Card key={i}>
      <Flex alignItems="items-start">
        <Block>
          <Text>{titulo}</Text>
          <Metric>{ejecutadas}</Metric>
        </Block>
        <a href={url}>
          <BadgeDelta
            text={calculo + "%"}
            deltaType={calculo < minimo_exigido ? "decrease" : "increase"}
          />
        </a>
      </Flex>

      <CategoryBar
        categoryPercentageValues={[calculo, 100 - calculo]}
        colors={["sky", "slate"]}
        marginTop="mt-4"
      />

      <Legend
        categories={["Ejecutadas", "Planificadas"]}
        colors={["sky", "slate"]}
        marginTop="mt-3"
      />
    </Card>
  );
};

const CardData = () => {
  return data.map((item, i) => laCard(item, i));
};

export default CardData;
