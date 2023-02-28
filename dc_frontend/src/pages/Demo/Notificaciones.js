import React, { useState } from "react";
import { PlusOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Modal, Upload } from "antd";
const { RangePicker } = DatePicker;
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
const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select time!",
    },
  ],
};

const Notificaciones = () => {
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
      fechaInicio: convertirFecha(e[0].$d.toString()),
      fechaFin: convertirFecha(e[1].$d.toString()),
    });
  };

  const handleFileUpload = (file) => {
    setInput({
      ...input,
      archivos: file,
    });
  };

  const onFinish = () => {
    setList(input);
    console.log(list);
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

  return (
    <div>
      NOTIFICACIONES
      <div>
        <table>
          <tr>
            <td>FECHA DE PLAZO</td>
            <td>
              {list.fechaInicio} -{list.fechaFin}
            </td>
          </tr>
          <tr>
            <td>NOMBRE</td>
            <td>{list.nombre}</td>
          </tr>
          <tr>
            <td>ESTADO</td>
            <td>ACTIVO</td>
          </tr>
          <tr>
            <td>VER</td>
            <td>
              <EyeTwoTone />
            </td>
          </tr>
        </table>
      </div>
      <Button type="primary" onClick={showModal}>
        CREAR
      </Button>
      <Modal
        title="CREACION DE TAREAS"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            SALIR
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            INSERTAR
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
          <Form.Item label="NOMBRE ACTIVIDAD">
            <Input name="nombre" onChange={(e) => handleChange(e)} />
          </Form.Item>
          <Form.Item
            name="range-picker"
            label="FECHA INICIO Y TERMINO"
            {...rangeConfig}
          >
            <RangePicker onChange={(e) => handleDateChange(e)} />
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
              <Select.Option value="MARCOS VERA">MARCOS VERA</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="DESCRIPCION">
            <TextArea
              name="descripcion"
              onChange={(e) => handleChange(e)}
              rows={4}
            />
          </Form.Item>
          <Form.Item label="OBSERVACIONES">
            <TextArea
              name="observaciones"
              onChange={(e) => handleChange(e)}
              rows={4}
            />
          </Form.Item>
          <Form.Item label="SUBIR ARCHIVO" valuePropName="fileList">
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
        </Form>
      </Modal>
    </div>
  );
};

export default Notificaciones;
