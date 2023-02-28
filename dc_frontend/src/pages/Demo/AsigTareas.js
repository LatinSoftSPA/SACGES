import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Select, Modal } from "antd";
import {
  PlusSquareTwoTone,
  EditTwoTone,
  DeleteTwoTone,
} from "@ant-design/icons";
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
const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
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

const onFinish = () => {};

function AsigTareas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState({});
  const [input, setInput] = useState({});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    console.log(input);
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
      ASIGNACION DE TAREAS
      <div>
        <table>
          <tr>
            <td>RESPONSABLES</td>
            <td>CRISTIAN AEDO</td>
            <td>MARCOS VERA</td>
            <td>BASTIAN PADILLA</td>
            <td>PABLO NEIRA</td>
          </tr>
          <tr>
            <td>ASIGNAR NUEVA TAREA</td>
            <td>
              <PlusSquareTwoTone />
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
            CANCELAR
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
        </Form>
      </Modal>
      TAREAS ASIGNADAS
      <div>
        <table>
          <tr>
            <td>FECHA DE INICIO</td>
            <td>{list.fechaFin}</td>
          </tr>
          <tr>
            <td>FECHA DE TERMINO</td>
            <td>{list.fechaFin}</td>
          </tr>
          <tr>
            <td>NOMBRE DE ACTIVIDAD</td>
            <td>{list.nombre}</td>
          </tr>
          <tr>
            <td>RESPONSABLE</td>
            <td>
              {list.fechaInicio} -{list.fechaFin}
            </td>
          </tr>
          <tr>
            <td>DESCRIPCION</td>
            <td>{list.descripcion}</td>
          </tr>
          <tr>
            <td>EDITAR</td>
            <td>
              <EditTwoTone />
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
    </div>
  );
}

export default AsigTareas;
