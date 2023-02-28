import React, {useState} from "react";
import {Flex, Table, TableBody, TableCell, TableRow } from "@tremor/react";


import BuscarArchivos from "../../../../../../components/Botones/BuscarArchivos";
import ModalSubirMedios from "../../Modals/SubirMedios";
import ModalCrearAcompaniamineto from "../../Modals/CrearAcompaniamiento";

const TableBase = ({ medios }) => {
  const [openModalCrear, setOpenModalCrear] = useState(false);
  const [openModalSubir, setOpenModalSubir] = useState(false);
  const [loading, setLoading] = useState(false);


  const modalCrear = () => {
    console.log("ABRIR MODAL DE CREACION...!!!");
    setOpenModalCrear(true);
  }
  
  const modalSubir = () => {
    // console.log("ABRIR MODAL DE CARGAR ARCHIVO...!!!");
    setOpenModalSubir(true);
  };

  const handleOk = (archivo) => {
    setLoading(true);
    setTimeout(() => {
      setOpenModalSubir(false);
      setLoading(false);
    }, 2000);
    console.log(archivo);
  };

  const handleCancel = () => {
    setOpenModalSubir(false);
    setOpenModalCrear(false);
  };

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
                    <BuscarArchivos cargado={cargado} modalCrear={modalCrear} modalSubir={modalSubir} />
                  </Flex>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <ModalSubirMedios 
        open={openModalSubir} 
        handleOk={handleOk} 
        handleCancel={handleCancel} 
        loading={loading}
      />
      <ModalCrearAcompaniamineto 
        open={openModalCrear} 
        handleOk={handleOk} 
        handleCancel={handleCancel} 
        loading={loading}
      />
    </>
  );
};

export default TableBase;
