import React from "react";
import { useSelector } from "react-redux";

import { Button, Modal, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Fecha inicio",
    dataIndex: "fechaInicio",
    key: "fechaInicio",
  },
  {
    title: "Fecha término",
    dataIndex: "fechaFin",
    key: "fechaFin",
  },
  {
    title: "Nombre Actividad",
    dataIndex: "nombre",
    key: "nombre",
  },

  {
    title: "Responsable",
    dataIndex: "responsable",
    key: "responsable",
  },

  {
    title: "Descripcion",
    dataIndex: "descripcion",
    key: "descripcion",
  },

  {
    title: "Editar",
    dataIndex: "editar",
    key: "editar",
  },

  {
    title: "Eliminar",
    dataIndex: "eliminar",
    key: "eliminar",
  },
];

const ListaActividades = ({ isModalOpen, handleCancel, loading }) => {
  let datos = useSelector((state) => state.actividades);

  if (datos) {
    datos.forEach(
      (dato) => (
        (dato.editar = <EditOutlined />), (dato.eliminar = <DeleteOutlined />)
      )
    );
  }

  return (
    <Modal
      title="Lista De Actividades"
      open={isModalOpen}
      onCancel={handleCancel}
      width={1000}
      footer={[
        <Button key="back" onClick={handleCancel}>
          SALIR
        </Button>,
      ]}
    >
      <Table dataSource={datos} columns={columns} />
    </Modal>
  );
};

export default ListaActividades;
