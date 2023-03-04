import React from "react";
import { useSelector } from "react-redux";

import { Button, Modal, Table } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PrinterOutlined,
} from "@ant-design/icons";

const columns = [
  {
    title: "Fecha",
    dataIndex: "fecha",
    key: "fecha",
  },
  {
    title: "Nombre",
    dataIndex: "nombre",
    key: "nombre",
  },
  {
    title: "Editar",
    dataIndex: "editar",
    key: "editar",
  },

  {
    title: "Ver",
    dataIndex: "ver",
    key: "ver",
  },

  {
    title: "Imprimir",
    dataIndex: "imprimir",
    key: "imprimir",
  },

  {
    title: "Eliminar",
    dataIndex: "eliminar",
    key: "eliminar",
  },
];

const ListaGantt = ({ isModalOpen, handleCancel, loading }) => {
  let datos = useSelector((state) => state.gantt);

  if (datos) {
    datos.forEach((dato) =>
      (dato.editar = <EditOutlined />)((dato.eliminar = <DeleteOutlined />))(
        (dato.ver = <EyeOutlined />)
      )((dato.imprimir = <PrinterOutlined />))
    );
  }

  return (
    <Modal
      title="Lista De Cartas Gantt"
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

export default ListaGantt;
