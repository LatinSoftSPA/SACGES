import React, { useState } from "react";
import {
  EditTwoTone,
  PrinterTwoTone,
  DeleteTwoTone,
  EyeTwoTone,
} from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Modal } from "antd";
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

const CartaGrantt = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gantt, setGantt] = useState({});
  const [ganttList, setGanttList] = useState({});
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
  const handleChangeGantt = (e) => {
    console.log(gantt);
    setGantt({
      ...gantt,
      [e.target.name]: e.target.value,
    });
  };

  const handleResponsableChange = (e) => {
    setInput({
      ...input,
      responsable: e,
    });
  };

  const handleDateChangeGantt = (e) => {
    const convertirFecha = (fecha) => {
      const date = new Date(fecha);
      const dia = date.getDate();
      const mes = date.getMonth() + 1;
      const anio = date.getFullYear();
      return `${dia}/${mes}/${anio}`;
    };

    setGantt({
      ...gantt,
      fecha: convertirFecha(e.$d.toString()),
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

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal2 = () => {
    setIsModal2Open(true);
  };

  const handleOk2 = () => {
    setList(input);
    console.log(list);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
    }, 3000);
  };

  const handleCancel2 = () => {
    setIsModal2Open(false);
  };

  const onFinish = () => {
    setList(input);
    console.log(gantt);
  };

  const onFinish2 = () => {
    setList(input);
    console.log(list);
  };

  return (
    <div>
      <div>CARTA GANTT</div>
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
        CREAR
      </Button>
      <Modal
        title="CREACION DE CARTA GANTT"
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
            CREAR
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
          <Form.Item label="NOMBRE CARTA GANTT">
            <Input name="nombre" onChange={(e) => handleChangeGantt(e)} />
          </Form.Item>
          <Form.Item name="date-picker" label="FECHA">
            <DatePicker onChange={(e) => handleDateChangeGantt(e)} />
          </Form.Item>
        </Form>
      </Modal>
      <div>ACTIVIDADES</div>
      <div>
        <table>
          <tr>
            <td>FECHA INICIO</td>
            <td>{list.fechaInicio}</td>
          </tr>
          <tr>
            <td>FECHA TERMINO</td>
            <td>{list.fechaFin}</td>
          </tr>
          <tr>
            <td>NOMBRE</td>
            <td>{list.nombre}</td>
          </tr>
          <tr>
            <td>ACTIVIDAD</td>
            <td>ACTIVIDAD</td>
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
      <Button type="primary" onClick={showModal2}>
        CREAR
      </Button>
      <Modal
        title="CREACION DE ACTIVIDAD"
        open={isModal2Open}
        onOk={handleOk2}
        onCancel={handleCancel2}
        footer={[
          <Button key="back" onClick={handleCancel2}>
            CANCELAR
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk2}
          >
            INSERTAR
          </Button>,
        ]}
      >
        <Form
          name="time_related_controls"
          {...formItemLayout}
          onFinish={onFinish2}
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
    </div>
  );
};

export default CartaGrantt;
