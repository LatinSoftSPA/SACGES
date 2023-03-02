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

const ItemAcordeon = ({ indicador, handleClick }) => {
  const { titulo, descripcion, progreso, medios, formula } = indicador;

  let expanded = false;

  return (
    <Accordion expanded={expanded}>
      <div className="bg-emerald-100" onClick={handleClick}>
        <AccordionHeader>
          <Flex justifyContent="jutify-between">
            {titulo && (
              <Flex>
                <Text>{titulo}</Text>
              </Flex>
            )}
            {progreso && <BarraProgreso valor={progreso} color="green" />}
          </Flex>
        </AccordionHeader>
      </div>
      <AccordionBody>
        {descripcion && <Subtitle marginTop="mt-4">{descripcion}</Subtitle>}
        {formula && <FormulaCard formula={formula} />}
        {medios && <TablaDetalles medios={medios} titulo={titulo} />}
      </AccordionBody>
    </Accordion>
  );
};

export default ItemAcordeon;
