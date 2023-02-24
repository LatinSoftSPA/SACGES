import { Flex, Card, Callout, Metric, Italic } from "@tremor/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const FormulaCard = ({ formula }) => {
  const { glosa, calculo } = formula;
  return (
    <>
      <Flex justifyContent="justify-center">
        <Callout
          title="Formula de Calculo"
          text={glosa}
          icon={CheckCircleIcon}
          height="h-10"
          color="cyan"
          marginTop="mt-4"
        />
      </Flex>
      <Card marginTop="mt-4">
        <Flex justifyContent="justify-center">
          <Italic>
            <Metric>{calculo}</Metric>
          </Italic>
        </Flex>
      </Card>
    </>
  );
};

export default FormulaCard;
