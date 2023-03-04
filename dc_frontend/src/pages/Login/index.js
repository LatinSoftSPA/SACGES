import { Button, Form, Card } from "antd";
import React, { useState } from "react";
import { InputTextoSimple } from "../../components/Form/Form";
import "./login.css";
import img from "./logo.png";

const Login = () => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = () => {
    console.log(user);
  };
  return (
    <div id="login-container">
      <Card
        style={{
          width: 540,
        }}
        cover={<img alt="example" src={img} />}
      >
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <InputTextoSimple
            label={"Usuario"}
            nombre={"usuario"}
            onChange={handleChange}
          />

          <InputTextoSimple
            label={"Contraseña"}
            nombre={"contraseña"}
            onChange={handleChange}
          />

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              INICIAR SESION
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
