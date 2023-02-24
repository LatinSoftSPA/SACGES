import { Flex, Table, TableBody, TableCell, TableRow } from "@tremor/react";

import BuscarArchivos from "../../../../../../components/Botones/BuscarArchivos";

const TableBase = ({ medios }) => {
  return (
    <>
      <Table marginTop="mt-5">
        <TableBody>
          {medios.map((obj, i) => {
            const { titulo, cargado } = obj;
            return (
              <TableRow key={i}>
                <TableCell> {i + 1} </TableCell>
                <TableCell> {titulo} </TableCell>
                <TableCell>
                  <Flex justifyContent="justify-end">
                    <BuscarArchivos cargado={cargado} titulo={titulo} />
                  </Flex>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default TableBase;
