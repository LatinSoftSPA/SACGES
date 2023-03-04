import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "antd";
import {
  InputTextoSimple,
  conversionFecha,
  FechaInput,
} from "../../components/Form/Form";
import actions from "../../redux/action-creators";

const { crearGantt } = actions;

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

const CreacionGantt = ({ isModalOpen, handleCancel, loading }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({});

  const handleDateChange = (e) => {
    setInput({
      ...input,
      fecha: conversionFecha(e.$d.toString()),
    });
  };

  const handleOk = () => {
    dispatch(crearGantt(input));
    setInput({});
    handleCancel();
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
        style={{
          maxWidth: 600,
        }}
      >
        <InputTextoSimple
          label={"NOMBRE"}
          nombre={"nombre"}
          onChange={handleChange}
        />
        <FechaInput
          label={"FECHA"}
          nombre={"fecha"}
          onChange={handleDateChange}
        />
      </Form>
    </Modal>
  );
};

export default CreacionGantt;
