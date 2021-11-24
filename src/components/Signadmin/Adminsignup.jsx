import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { ADD_USER, LOGIN_USER } from "../../store/Actions/userAction";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withRouter } from "react-router";
import { addingAdmin } from "../../store/reducers/User";
function Adminsignup({ history, ...props }) {
  const [getname, setname] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const dispatch = useDispatch();

  const handlesubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      addingAdmin({
        name: getname,
        email: getEmail,
        password: getPassword,
      })
    )
      .then(history.push("/userPanel"))
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <p style={{ textAlign: "center" }}>
        <UserOutlined className="site-form-item-icon" /> Global reach 
      </p> 
      <p style={{ textAlign: "center" }}>
        <UserOutlined className="site-form-item-icon" />  Admin Signup
      </p>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="username"
          onChange={(e)=>{setname(e.target.value)}}
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>{" "}
        <Form.Item
          name="Email"
          onChange={(e)=>{setEmail(e.target.value)}}

          rules={[
            {
              required: true,
              message: "Please input your Email!",
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
          onChange={(e)=>{setPassword(e.target.value)}}

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
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.user.users,
});

export default withRouter(connect(mapStateToProps, { ADD_USER })(Adminsignup));
