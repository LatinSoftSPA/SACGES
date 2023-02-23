import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Text,
  ProgressBar,
  Flex,
  Subtitle,
  Card,
  Callout,
  Metric,
  Italic,
} from "@tremor/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import TablaDetalles from "../../Tabla/Detalles";

const BarraProgreso = ({ valor, color }) => {
  const label = valor + "%";
  const tooltip = valor + "% Cumplido";
  return (
    <div width="150px">
      <ProgressBar
        percentageValue={valor}
        label={label}
        tooltip={tooltip}
        showAnimation={true}
        color={color}
      />
    </div>
  );
};

const FormulaCard = ({ formula }) => {
  const { glosa, calculo } = formula;
  return (
    <>
      <Flex justifyContent="justify-center">
        <Callout
          maxWidth="max-w-md"
          title="Formula de Calculo"
          text={glosa}
          icon={CheckCircleIcon}
          height="h-10"
          color="cyan"
          marginTop="mt-4"
        />
      </Flex>
      <Card maxWidth="max-w-md" marginTop="mt-4">
        <Flex justifyContent="justify-center">
          <Italic>
            <Metric>{calculo}</Metric>
          </Italic>
        </Flex>
      </Card>
    </>
  );
};

const ItemAcordeon = ({ indicador, expanded, handleClick }) => {
  const { titulo, descripcion, progreso, medios, formula } = indicador;
  return (
    <Accordion expanded={expanded}>
      <div className="bg-emerald-100" onClick={handleClick}>
        <AccordionHeader>
          <Flex justifyContent="jutify-between">
            <Flex>
              <Text>{titulo}</Text>
            </Flex>
            <BarraProgreso valor={progreso} color="green" />
          </Flex>
        </AccordionHeader>
      </div>
      <AccordionBody>
        <Subtitle marginTop="mt-4">{descripcion}</Subtitle>
        <FormulaCard formula={formula} />
        <TablaDetalles medios={medios} />
      </AccordionBody>
    </Accordion>
  );
};

export default ItemAcordeon;
