import React, { useState} from "react";
import "antd/dist/antd.css";
import { Form, Input, Button,Row,Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withRouter } from "react-router";
import { connect, useDispatch } from "react-redux";
import {  LOGIN_USER } from "../../store/Actions/userAction";

function Adminlogin({ history, ...props }) {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const dispatch = useDispatch();

  const Check = () => {
    if (getEmail == "zainmir2000j@gmail.com" && getPassword == "zainzain12") {
      dispatch(
        LOGIN_USER({
          getEmail,
          getPassword,
        })
      );
      history.push("/Administrator");
    } else {
      alert("Incorrect Email or password");
      history.push("/Adminlogin");
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>
        <UserOutlined className="site-form-item-icon" /> Admin Login
      </h1>
      <Row type="flex" justify="center" align="middle" >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
         
        >
          <Form.Item
            name="username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
            
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
         
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={() => {
                Check();
              }}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.user.myuser,
});

export default withRouter(connect(mapStateToProps, { LOGIN_USER })(Adminlogin));
