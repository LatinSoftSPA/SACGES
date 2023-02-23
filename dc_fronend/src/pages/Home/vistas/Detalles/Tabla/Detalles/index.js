import React from "react";
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

import { DocumentCheckIcon } from "@heroicons/react/24/solid";

const columas = ["#", "Departament", "Opciones"];

const Cabecera = ({ columas }) => {
  return (
    <TableRow>
      {columas.map((item, i) => (
        <TableHeaderCell key={i}>{item}</TableHeaderCell>
      ))}
    </TableRow>
  );
};

const MediosRow = ({ medios }) => {
  return medios.map((obj, i) => {
    const { titulo, cargado } = obj;
    return (
      <TableRow key={i}>
        <TableCell> {i + 1} </TableCell>
        <TableCell> {titulo} </TableCell>
        <TableCell>
          <Badge
            text={"Subir Archivo"}
            color={cargado ? "green" : "red"}
            icon={DocumentCheckIcon}
          />
        </TableCell>
      </TableRow>
    );
  });
};

const TableBase = ({ medios }) => {
  return (
    <>
      <Table marginTop="mt-5">
        {/* <TableHead>
          <Cabecera columas={columas} />
        </TableHead> */}
        <TableBody>
          <MediosRow medios={medios} />
        </TableBody>
      </Table>
    </>
  );
};

export default TableBase;
