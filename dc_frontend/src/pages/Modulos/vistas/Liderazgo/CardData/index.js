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

const minimo_exigido = 45;

const CardData = ({ indicadores }) => {
  return indicadores.map((item, i) => {
    const { titulo, ejecutadas, planificadas, url } = item;
    const calculo = Math.floor((ejecutadas / planificadas) * 100);

    return (
      <Card key={i}>
        <Flex alignItems="items-start">
          <Block>
            <Text>{titulo}</Text>
            <Flex
              marginTop="mt-3"
              justifyContent="justify-start"
              alignItems="items-baseline"
              spaceX="space-x-1">
              <Metric>{ejecutadas}</Metric>

              <Text>/ {planificadas}</Text>
            </Flex>
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
          marginTop="mt-6"
        />

        <Flex
          justifyContent="justify-center"
          alignItems="items-baseline"
          spaceX="space-x-1">
          <Legend
            categories={["Ejecutadas", "Planificadas"]}
            colors={["sky", "slate"]}
            marginTop="mt-3"
          />
        </Flex>
      </Card>
    );
  });
};

export default CardData;
