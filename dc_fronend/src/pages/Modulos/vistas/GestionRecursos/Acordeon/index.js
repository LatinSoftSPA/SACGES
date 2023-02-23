import { AccordionList, ColGrid } from "@tremor/react";
import CardsData from "../CardData";
import ItemAcordeon from "./Items";

const AcordeonListado = ({ data }) => {
  const { indicadores } = data;
  const aux = indicadores.length;

  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <>
      <ColGrid numColsMd={1} numColsLg={aux} gapX="gap-x-6" gapY="gap-y-6">
        <CardsData indicadores={indicadores} />
      </ColGrid>

      <ColGrid marginTop="mt-5" gapX="gap-x-12" gapY="gap-y-12">
        <AccordionList>
          {indicadores.map((obj, i) => {
            return (
              <ItemAcordeon
                key={i}
                expanded={i === 0 ?? false}
                indicador={obj}
                handleClick={handleClick}
              />
            );
          })}
        </AccordionList>
      </ColGrid>
    </>
  );
};

export default AcordeonListado;
