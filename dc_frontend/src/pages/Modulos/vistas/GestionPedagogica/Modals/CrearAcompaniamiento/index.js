// import { useEffect } from 'react';
import { Button, Modal } from "antd";
import { Descriptions } from "antd";
import { FileDoneOutlined } from "@ant-design/icons";

import data from "../../../../../../data/mbe2.json"; //TODO: DATA DOMINIOS .json to DB
import Acordeon from "./Acordeon";
import { Divider } from "@tremor/react";

const Footer = (props) => {
  const { handleCancel, loading, handleOk } = props;
  const array = [
    <Button
      key="link"
      type="primary"
      icon={<FileDoneOutlined />}
      href="https://google.com"
      loading={loading}
      onClick={handleOk}
    >
      Crear Acompañamiento
    </Button>,
    <Button key="back" type="primary" onClick={handleCancel} danger>
      Cancelar
    </Button>,
  ];
  return array;
};

const FormData = () => {
  return (
    <Descriptions
      title="Acompañamiento al Aula"
      layout="vertical"
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
    >
      <Descriptions.Item label="Curso">2° B</Descriptions.Item>
      <Descriptions.Item label="Asignatura">Matematicas</Descriptions.Item>
      <Descriptions.Item label="Profesor">Cristian Aedo</Descriptions.Item>
      <Descriptions.Item label="Fecha">2018-04-24 18:00:00</Descriptions.Item>

      <Descriptions.Item label="Obserbaciones">
        Formulario de Creacion para el Acompañamiento al Aula
      </Descriptions.Item>
    </Descriptions>
  );
};

const ModalCrearAcompaniamineto = (props) => {
  const { open, handleOk, handleCancel, loading } = props;

  return (
    <Modal
      // title="Acompañamiento al Aula"
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
      centered
      width={1400}
      confirmLoading={loading}
      footer={<Footer handleCancel={handleCancel} handleOk={handleOk} />}
    >
      <FormData />
      <Divider />
      <Acordeon data={data} />
    </Modal>
  );
};
export default ModalCrearAcompaniamineto;
