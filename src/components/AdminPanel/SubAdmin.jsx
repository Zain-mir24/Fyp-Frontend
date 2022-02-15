import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Input,
  Upload,
  Col,
  Form,
  Select,
  Row,
  Radio,
} from "antd";
import axios from "axios";
const dotenv = require("dotenv");
dotenv.config({ debug: process.env.DEBUG });
function SubAdmin() {
  const [name, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const handlesubmit = async (e) => {
      try {
      const addsubAdmin = await axios.request({
        baseURL: "http://localhost:9000/",
        url: "Admin/addsubAdmin",
        method: "post",
        data: {
          name,
          getEmail,
          getPassword,
          SubAdmin:true
        },
      });
      if (!addsubAdmin) {
        console.log("There was an error");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1> SubAdmin Managment</h1>
      <Row>
        <Col span={12}>
          <Form>
            <Form.Item
              rules={[
                { required: true, message: "Please Enter campaign name" },
              ]}
            >
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                placeholder=" User name"
              />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter campaign Description",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                placeholder="Email"
                showCount
              />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter SubAdmin's password",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                placeholder="Password"
              />
            </Form.Item>

            <Button
              onClick={() => {
                handlesubmit();
              }}
              type="primary"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SubAdmin;
