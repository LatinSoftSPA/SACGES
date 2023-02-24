import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Text,
  Flex,
  Subtitle,
} from "@tremor/react";

import TablaDetalles from "../../Tabla/Detalles";
import BarraProgreso from "./BarraProgreso";
import FormulaCard from "./FormulaCard";

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
