import React, { useState } from "react";
import {
  PlusOutlined,
  EditTwoTone,
  EyeTwoTone,
  PrinterTwoTone,
  DeleteTwoTone,
} from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Modal, Upload } from "antd";
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

function Informes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState({});
  const [input, setInput] = useState({});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleResponsableChange = (e) => {
    setInput({
      ...input,
      responsable: e,
    });
  };

  const handleDateChange = (e) => {
    const convertirFecha = (fecha) => {
      const date = new Date(fecha);
      const dia = date.getDate();
      const mes = date.getMonth() + 1;
      const anio = date.getFullYear();
      return `${dia}/${mes}/${anio}`;
    };
    setInput({
      ...input,
      fecha: convertirFecha(e.$d.toString()),
    });
  };

  const handleFileUpload = (file) => {
    setInput({
      ...input,
      archivos: file,
    });
  };

  const handleFileUpload2 = (file) => {
    setInput({
      ...input,
      archivos2: file,
    });
  };

  const handleOk = () => {
    setList(input);
    console.log(list);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = () => {
    setList(input);
    console.log(list);
  };

  console.log(list);

  return (
    <div>
      INFORMES
      <div>
        <table>
          <tr>
            <td>FECHA</td>
            <td>{list.fecha}</td>
          </tr>
          <tr>
            <td>NOMBRE</td>
            <td>{list.nombre}</td>
          </tr>
          <tr>
            <td>EDITAR</td>
            <td>
              <EditTwoTone />
            </td>
          </tr>
          <tr>
            <td>VER</td>
            <td>
              <EyeTwoTone />
            </td>
          </tr>
          <tr>
            <td>IMPRIMIR</td>
            <td>
              <PrinterTwoTone />
            </td>
          </tr>
          <tr>
            <td>ELIMINAR</td>
            <td>
              <DeleteTwoTone />
            </td>
          </tr>
        </table>
      </div>
      <Button type="primary" onClick={showModal}>
        CREAR NUEVA
      </Button>
      <Modal
        title="CREACION DE INFORMES"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            CANCELAR
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            GUARDAR
          </Button>,
        ]}
      >
        <Form
          name="time_related_controls"
          {...formItemLayout}
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="NOMBRE">
            <Input name="nombre" onChange={(e) => handleChange(e)} />
          </Form.Item>
          <Form.Item name="date-picker" label="FECHA">
            <DatePicker onChange={(e) => handleDateChange(e)} />
          </Form.Item>

          <Form.Item label="RESPONSABLE">
            <Select
              name="responsable"
              onChange={(e) => handleResponsableChange(e)}
            >
              <Select.Option value="CRISTIAN AEDO">CRISTIAN AEDO</Select.Option>
              <Select.Option value="BASTIAN PADILLA">
                BASTIAN PADILLA
              </Select.Option>
              <Select.Option value="MARCOS VERA">MARCOS VERA</Select.Option>{" "}
            </Select>
          </Form.Item>
          <Form.Item label="DESCRIPCION">
            <TextArea
              name="descripcion"
              onChange={(e) => handleChange(e)}
              rows={4}
            />
          </Form.Item>

          <Form.Item label="FOTOGRAFIAS" valuePropName="fileList">
            <Upload action={(e) => handleFileUpload(e)} listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="LISTA ASISTENCIA" valuePropName="fileList">
            <Upload
              action={(e) => handleFileUpload2(e)}
              listType="picture-card"
            >
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
      <Button>GENERAR DOCUMENTO</Button>
    </div>
  );
}

export default Informes;
