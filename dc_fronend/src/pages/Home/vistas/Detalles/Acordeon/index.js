import { Title, AccordionList } from "@tremor/react";
import Item from "./Items";

const IndicadoresItems = ({ indicadores, handleClick }) => {
  return indicadores.map((obj, i) => {
    const { titulo, descripcion, progreso, medios, formula } = obj;
    return (
      <Item
        key={i}
        expanded={i === 0 ? true : false}
        titulo={titulo}
        descripcion={descripcion}
        valor={progreso}
        medios={medios}
        formula={formula}
        handleClick={handleClick}
      />
    );
  });
};

const AcordeonListado = ({ indicadores }) => {
  return (
    <>
      <Title>Indicadores</Title>
      <AccordionList marginTop="mt-5">
        <IndicadoresItems indicadores={indicadores} />
      </AccordionList>
    </>
  );
};

export default AcordeonListado;
