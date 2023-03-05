import React, { useState } from "react";
import { Flex, Table, TableBody, TableCell, TableRow } from "@tremor/react";
import BuscarArchivos from "../../../../../../components/Botones/BuscarArchivos";
import ListaActividades from "../../../../../Modals/ListaActividades";
import CreacionActividad from "../../../../../Modals/CreacionActividad";
import CreacionGantt from "../../../../../Modals/CreacionGantt";
import ListaGantt from "../../../../../Modals/ListaGantt";

const TablaDetalles = ({ medios, titulo }) => {
  const [modalCrearActividad, setModalCrearActividad] = useState(false);
  const [modalListaActividades, setModalListaActividades] = useState(false);

  const [modalCrearGantt, setModalCrearGantt] = useState(false);
  const [modalListaGantt, setModalListaGantt] = useState(false);

  const [loading] = useState(false);

  const mostrarModalCrearActividad = () => {
    setModalCrearActividad(!modalCrearActividad);
  };

  const mostrarModalListaActividades = () => {
    setModalListaActividades(!modalListaActividades);
  };

  const mostrarModalCrearGantt = () => {
    setModalCrearGantt(!modalCrearGantt);
  };

  const mostrarModalListaGantt = () => {
    setModalListaGantt(!modalListaGantt);
  };

  switch (titulo) {
    case "Indicador 1":
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
                          titulo={titulo}
                          modalCrear={""}
                        />
                      </Flex>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      );

    case "Indicador 2":
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
                          modalCrear={mostrarModalCrearActividad}
                          modalSubir={mostrarModalListaActividades}
                        />
                      </Flex>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
          <CreacionActividad
            open={modalCrearActividad}
            isModalOpen={modalCrearActividad}
            handleCancel={mostrarModalCrearActividad}
            loading={loading}
          />
          <ListaActividades
            open={modalListaActividades}
            isModalOpen={modalListaActividades}
            handleCancel={mostrarModalListaActividades}
            loading={loading}
          />
        </Table>
      );

    case "Indicador 3":
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
                          modalCrear={mostrarModalCrearGantt}
                          modalSubir={mostrarModalListaGantt}
                        />
                      </Flex>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
          <CreacionGantt
            open={modalCrearGantt}
            isModalOpen={modalCrearGantt}
            handleCancel={mostrarModalCrearGantt}
            loading={loading}
          />
          <ListaGantt
            open={modalListaGantt}
            isModalOpen={modalListaGantt}
            handleCancel={mostrarModalListaGantt}
            loading={loading}
          />
        </Table>
      );
    default:
      break;
  }
};

export default TablaDetalles;
