import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withRouter } from "react-router";
import { connect, useDispatch } from "react-redux";
import { LOGIN_USER } from "../../store/Actions/userAction";
import axios from "axios";
const dotenv = require("dotenv");
dotenv.config({ debug: process.env.DEBUG });
function Adminlogin({ history, ...props }) {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const dispatch = useDispatch();
  const handlesubmit = async (e) => {
    await axios
      .request({
        baseURL: "http://localhost:9000/admin",
        url: "/login",
        method: "post",
        data: {
          getEmail,
          getPassword,
        },
      })
      .then((res) => {
        console.log(res);
        var username = res.data.admin.name;
        var userId = res.data.admin._id;
        var subAdmin = res.data.admin.subAdmin;
        var verifToken = res.data.token;
        console.log(verifToken);
        if (res.status == 200) {
          alert(`Correct credentials,Redirecting you to admin panel`);

          dispatch(
            LOGIN_USER({
              verifToken,
              subAdmin,
              getEmail,
              getPassword,
              username,
              userId,
            })
          );
          subAdmin == true
            ? history.push("/SubAdministrator")
            : history.push("/Administrator");
        }

      })
      .catch((e) => {
        alert(`Incorrect credentials`);
        console.log("our error", e);
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>
        <UserOutlined className="site-form-item-icon" /> Admin Login
      </h1>
      <Row type="flex" justify="center" align="middle">
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
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={() => {
                handlesubmit();
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
  users: state.persistedReducer.user.user,
});

export default withRouter(connect(mapStateToProps, { LOGIN_USER })(Adminlogin));
