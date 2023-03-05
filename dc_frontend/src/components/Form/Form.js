import { DatePicker, Form, Input, Select, Upload, Button } from "antd";
import {
  PlusOutlined,
  MinusCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

//check
export const InputTextoSimple = ({ label, nombre, onChange }) => {
  return (
    <Form.Item label={label}>
      <Input name={nombre} onChange={(e) => onChange(e)} />
    </Form.Item>
  );
};

//check
export const TextAreaInput = ({ label, nombre, onChange, filas }) => {
  return (
    <Form.Item label={label}>
      <TextArea name={nombre} onChange={(e) => onChange(e)} rows={filas} />
    </Form.Item>
  );
};

//check
export const IntervaloFechaInput = ({ label, onChange }) => {
  const rangeConfig = {
    rules: [
      {
        type: "array",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  return (
    <Form.Item name="range-picker" label={label} {...rangeConfig}>
      <RangePicker onChange={(e) => onChange(e)} />
    </Form.Item>
  );
};

//check
export const FechaInput = ({ label, onChange }) => {
  return (
    <Form.Item name="date-picker" label={label}>
      <DatePicker onChange={(e) => onChange(e)} />
    </Form.Item>
  );
};

//check
export const conversionFecha = (fecha) => {
  const date = new Date(fecha);
  const dia = date.getDate();
  const mes = date.getMonth() + 1;
  const anio = date.getFullYear();
  return `${dia}/${mes}/${anio}`;
};

//action
export const FotoInput = ({ onChange }) => {
  return (
    <Form.Item label="FOTOGRAFIAS" valuePropName="fileList">
      <Upload action={(e) => onChange(e)} listType="picture-card">
        <div>
          <PlusOutlined />
          <div
            style={{
              marginTop: 8,
            }}
          >
            Subir
          </div>
        </div>
      </Upload>
    </Form.Item>
  );
};

//check
export const SelectInput = ({ label, nombre, onChange, opciones }) => {
  return (
    <Form.Item label={label}>
      <Select name={nombre} onChange={(e) => onChange(e)}>
        {opciones &&
          opciones.map((op) => <Select.Option value={op}>{op}</Select.Option>)}
      </Select>
    </Form.Item>
  );
};

export const InputTextoMultiple = ({}) => {
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

  return (
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
              {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
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
  );
};

export const ArchivoUnicoInput = ({ onChange }) => {
  return (
    <Form.Item label={"archivo"}>
      <Upload action={(e) => onChange(e)} listType="picture" maxCount={1}>
        <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
      </Upload>
    </Form.Item>
  );
};

export const MultiplesArchivosInput = () => {
  return;
};
