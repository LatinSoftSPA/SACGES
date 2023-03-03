import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Modal, Descriptions } from "antd";
import actions from "../../../../../redux/action-creators";
const { getAllGantt } = actions;

const ListaGantt = ({ isModalOpen, handleCancel, loading }) => {
  const dispatch = useDispatch();
  const handleOk = () => {
    console.log("ok");
  };

  let gantt = useSelector((state) => state.gantt);

  console.log(gantt);

  // useEffect(() => {
  // dispatch(getAllGantt());
  // }, [dispatch]);

  return (
    <Modal
      title=""
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          SALIR
        </Button>,
      ]}
    >
      <Descriptions
        title="Cartas Gantt"
        layout="vertical"
        bordered
        column={{ xxl: 3, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Fecha inicio">
          {gantt && gantt.fechaInicio}
        </Descriptions.Item>
        <Descriptions.Item label="Fecha término">
          {gantt && gantt.fechaFin}
        </Descriptions.Item>
        <Descriptions.Item label="Nombre Actividad">
          {gantt && gantt.nombre}
        </Descriptions.Item>
        <Descriptions.Item label="Responsable">
          {gantt && gantt.responsable}
        </Descriptions.Item>

        <Descriptions.Item label="Descripcion">
          {gantt && gantt.descripcion}
        </Descriptions.Item>
        <Descriptions.Item label="Editar">EDITAR</Descriptions.Item>
        <Descriptions.Item label="Eliminar">ELIMINAR</Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default ListaGantt;
