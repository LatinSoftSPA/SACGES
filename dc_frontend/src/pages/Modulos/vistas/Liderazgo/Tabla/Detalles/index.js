import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Table, TableBody, TableCell, TableRow } from "@tremor/react";

import BuscarArchivos from "../../../../../../components/Botones/BuscarArchivos";

import CartaGrantt from "../../Modals/CartaGantt";
import { getAllGantt } from "../../../../../../redux/action-creators/liderazgo";
import ListaGantt from "../../Modals/ListaGantt";

const TablaDetalles = ({ medios, titulo }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isListaOpen, setIsListaOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const gantt = useSelector((state) => state.gantt);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showList = () => {
    setIsListaOpen(true);
  };

  const hideList = () => {
    setIsListaOpen(false);
  };

  useEffect(() => {
    dispatch(getAllGantt());
  }, []);

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

    case "Indicador 3":
      return (
        <>
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
                            modalCrear={showModal}
                            modalSubir={showList}
                          />
                        </Flex>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          <CartaGrantt
            open={isModalOpen}
            isModalOpen={isModalOpen}
            handleCancel={handleCancel}
            loading={loading}
          />
          <ListaGantt
            open={isListaOpen}
            isModalOpen={isListaOpen}
            handleCancel={hideList}
            loading={loading}
          />
        </>
      );

    default:
      break;
  }
};

export default TablaDetalles;
