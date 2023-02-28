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

  const handleProtocolosChange = (e) => {
    setInput({
      ...input,
      protocolos: e,
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

  return (
    <div>
      REGISTRO INTERNO SITUACIONES DE CONFLICTO ESCOLAR
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
            <TextArea rows={4} />
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
                        placeholder="NOMBRE INVOLUCRADO"
                        style={{
                          width: "60%",
                        }}
                      />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
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
