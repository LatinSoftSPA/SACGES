import React, { useState } from "react";
import { Table, TableBody, TableCell, TableRow, Flex } from "@tremor/react";
import BuscarArchivos from "../../../../../../components/Botones/BuscarArchivos";
import CreacionConflictos from "../../../../../Modals/CreacionConflictos";
import ListaConflictos from "../../../../../Modals/ListaConflictos";

const TableBase = ({ medios, titulo }) => {
  const [modalCrearConflicto, setModalCrearConflicto] = useState(false);
  const [modalListaConflicto, setModalListaConflicto] = useState(false);

  const [loading] = useState(false);

  const mostrarModalCrearConflicto = () => {
    setModalCrearConflicto(!modalCrearConflicto);
  };

  const mostrarModalListaConflicto = () => {
    setModalListaConflicto(!modalListaConflicto);
  };

  return (
    <Table marginTop="mt-5">
      <TableBody>
        {medios &&
          medios?.map((obj, i) => {
            const { titulo, cargado } = obj;
            return (
              <TableRow key={i}>
                <TableCell> {i + 1} </TableCell>
                <TableCell> {titulo} </TableCell>
                <TableCell>
                  <Flex justifyContent="justify-end">
                    <BuscarArchivos
                      cargado={cargado}
                      modalCrear={mostrarModalCrearConflicto}
                      modalSubir={mostrarModalListaConflicto}
                    />
                  </Flex>
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
      <CreacionConflictos
        open={modalCrearConflicto}
        isModalOpen={modalCrearConflicto}
        handleCancel={mostrarModalCrearConflicto}
        loading={loading}
      />
      <ListaConflictos
        open={modalListaConflicto}
        isModalOpen={modalListaConflicto}
        handleCancel={mostrarModalListaConflicto}
        loading={loading}
      />
    </Table>
  );
};

export default TableBase;
