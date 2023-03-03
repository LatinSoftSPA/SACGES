import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "antd";
import {
  InputTextoSimple,
  IntervaloFechaInput,
  SelectInput,
  TextAreaInput,
  conversionFecha,
} from "../../../../../components/Form/Form";
import actions from "../../../../../redux/action-creators";

const { createGantt } = actions;

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

const CartaGrantt = ({ isModalOpen, handleCancel, loading }) => {
  const dispatch = useDispatch();
  let responsables = ["CRISTIAN AEDO", "BASTIAN PADILLA", "MARCOS VERA"];

  const [list, setList] = useState({});
  const [input, setInput] = useState({});

  const handleResponsableChange = (e) => {
    setInput({
      ...input,
      responsable: e,
    });
  };

  const handleDateChange = (e) => {
    setInput({
      ...input,
      fechaInicio: conversionFecha(e[0].$d.toString()),
      fechaFin: conversionFecha(e[1].$d.toString()),
    });
  };

  const handleOk = () => {
    dispatch(createGantt(input));
  };

  const onFinish = () => {
    console.log("hola");

    createGantt(input);
    setList(input);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
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
        <InputTextoSimple
          label={"NOMBRE ACTIVIDAD"}
          nombre={"nombre"}
          onChange={handleChange}
        />

        <IntervaloFechaInput
          label={"FECHA DE INICIO Y FIN"}
          onChange={handleDateChange}
        />

        <SelectInput
          label={"RESPONSABLE"}
          nombre={"responsable"}
          onChange={handleResponsableChange}
          opciones={responsables}
        />

        <TextAreaInput
          label={"DESCRIPCION"}
          nombre={"descripcion"}
          onChange={handleChange}
          filas={4}
        />
      </Form>
    </Modal>
  );
};

export default CartaGrantt;
