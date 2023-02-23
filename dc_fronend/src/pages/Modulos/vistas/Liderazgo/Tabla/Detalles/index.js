import { Flex, Table, TableBody, TableCell, TableRow } from "@tremor/react";

import BuscarArchivos from "../../../../../../components/Botones/BuscarArchivos";

const MediosRow = ({ medios, handleSeleccion, handleUpLoad }) => {
  return medios.map((obj, i) => {
    const { titulo, cargado } = obj;
    return (
      <TableRow key={i}>
        <TableCell> {i + 1} </TableCell>
        <TableCell> {titulo} </TableCell>
        <TableCell>
          <Flex justifyContent="justify-end">
            <BuscarArchivos
              cargado={cargado}
              handleSeleccion={handleSeleccion}
              handleUpLoad={handleUpLoad}
            />
          </Flex>
        </TableCell>
      </TableRow>
    );
  });
};

const TableBase = ({ medios, handleSeleccion, handleUpLoad }) => {
  return (
    <>
      <Table marginTop="mt-5">
        <TableBody>
          <MediosRow
            medios={medios}
            handleSeleccion={handleSeleccion}
            handleUpLoad={handleUpLoad}
          />
        </TableBody>
      </Table>
    </>
  );
};

export default TableBase;
