import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  PlusOutlined,
  EditTwoTone,
  EyeTwoTone,
  PrinterTwoTone,
  DeleteTwoTone,
} from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Modal, Upload } from "antd";
import {
  SelectInput,
  conversionFecha,
  FechaInput,
  InputTextoSimple,
  TextAreaInput,
  FotoInput,
  ArchivoUnicoInput,
  InputTextoMultiple,
} from "../../components/Form/Form";
import actions from "../../redux/action-creators";
const { crearConflicto } = actions;
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

function CreacionConflictos({ isModalOpen, handleCancel }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    fotos: [],
  });

  let responsables = ["CRISTIAN AEDO", "BASTIAN PADILLA", "MARCOS VERA"];

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
    setInput({
      ...input,
      fecha: conversionFecha(e.$d.toString()),
    });
  };

  const handleSubirFoto = (file) => {
    setInput({
      ...input,
      fotos: [...input.fotos, file],
    });
  };

  const handleSubirArchivo = (file) => {
    setInput({
      ...input,
      archivo: file,
    });
  };

  const handleInvolucrados = () => {};

  const handleOk = () => {
    dispatch(crearConflicto(input));
    setInput({});
    handleCancel();
    console.log(input);
  };

  return (
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
        style={{
          maxWidth: 600,
        }}
      >
        <InputTextoSimple
          label={"NOMBRE DE INFORME"}
          nombre={"nombre"}
          onChange={handleChange}
        />

        <FechaInput
          label={"FECHA"}
          nombre={"fecha"}
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

        <FotoInput onChange={handleSubirFoto} />

        <ArchivoUnicoInput onChange={handleSubirArchivo} />

        <InputTextoMultiple onChange={handleInvolucrados} />
      </Form>
    </Modal>
  );
}

export default CreacionConflictos;
