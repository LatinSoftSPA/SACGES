import React, { useState } from "react";
import {
  MinusCircleOutlined,
  PlusOutlined,
  EditTwoTone,
  PrinterTwoTone,
  DeleteTwoTone,
  EyeTwoTone,
} from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Modal, Upload } from "antd";
import {
  conversionFecha,
  FechaInput,
  FotoInput,
  InputTextoSimple,
} from "../../components/Form/Form";
const { TextArea } = Input;

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};

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

function Conflictos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState({});
  const [input, setInput] = useState({
    nombre: "",
    involucrados: [],
  });

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

  const handleProtocolosChange = (e) => {
    setInput({
      ...input,
      protocolos: e,
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

  const onFinish = () => {
    setList(input);
  };

  const handleMultipleChange = (e) => {
    console.log(input);
    let involNum = `involucrado ${
      parseInt(e.target.id[e.target.id.length - 1]) + 1
    }`;
    setInput({
      ...input,
      [involNum]: e.target.value,
    });
  };

  return (
    <div>
      REGISTRO INTERNO SITUACIONES DE CONFLICTO ESCOLAR
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
          <InputTextoSimple
            label={"NOMBRE"}
            nombre={"nombre"}
            onChange={handleChange}
          />

          <FechaInput label="FECHA" onChange={handleDateChange} />

          <FotoInput onChange={handleFileUpload} />
          {/*  */}
          {/*  */}
          {/*  */}
          <Form.List
            name="names"
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 2) {
                    return Promise.reject(new Error("At least 2 passengers"));
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }) => (
              <>
                {/* {console.log(fields)} */}
                {fields.map((field, index) => (
                  <Form.Item
                    {...(index === 0
                      ? formItemLayout
                      : formItemLayoutWithOutLabel)}
                    label={index === 0 ? "INVOLUCRADOS" : ""}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                        },
                      ]}
                      noStyle
                    >
                      <Input
                        onChange={handleMultipleChange}
                        placeholder="NOMBRE INVOLUCRADO"
                        style={{
                          width: "60%",
                        }}
                      />
                    </Form.Item>

                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{
                      width: "60%",
                    }}
                    icon={<PlusOutlined />}
                  >
                    AGREGAR INVOLUCRADO
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item label="PROTOCOLOS APLICADOS">
            <Select
              name="responsable"
              onChange={(e) => handleProtocolosChange(e)}
            >
              <Select.Option value="PROTOCOLO 1">PROTOCOLO 1</Select.Option>
              <Select.Option value="PROTOCOLO 2">PROTOCOLO 2</Select.Option>
              <Select.Option value="PROTOCOLO 3">PROTOCOLO 3</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <Button>GENERAR DOCUMENTO</Button>
    </div>
  );
}

export default Conflictos;
