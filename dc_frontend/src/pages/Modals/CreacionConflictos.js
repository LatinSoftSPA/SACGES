import React, { useState } from "react";
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
} from "../../components/Form/Form";
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

function CreacionConflictos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState({});
  const [input, setInput] = useState({});

  let responsables = ["CRISTIAN AEDO", "BASTIAN PADILLA", "MARCOS VERA"];

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
    setInput({
      ...input,
      fecha: conversionFecha(e.$d.toString()),
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
          <Upload action={(e) => handleFileUpload2(e)} listType="picture-card">
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
  );
}

export default CreacionConflictos;
