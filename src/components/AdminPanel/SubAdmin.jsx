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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setlocation] = useState("");
  const handlesubmit = async (e) => {
    try {
      const addsubAdmin = await axios.request({
        baseURL: "http://localhost:9000/",
        url: "admin/SubAdminadd",
        method: "post",
        data: {
          name,
          email,
          password,
          SubAdmin: true,
        },
      });
      if (!addsubAdmin) {
        console.log("There was an error");
      } else {
        alert(`A new sub admin Created`);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="row">
      <h1> SubAdmin Managment</h1>
      <div className="col-lg-6">
        <h3>Adding sub Admin</h3>
        <Row>
          {/* Adding SubAdmin */}
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
              </Form.Item>{" "}
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Enter Loaction of Admin",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setlocation(e.target.value);
                  }}
                  required
                  placeholder="Location"
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
      <div className="col-lg-6">
        <h3>updating sub Admin</h3>
        <Row>
          {/* updating SubAdmin */}
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
              </Form.Item>{" "}
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Enter Loaction of Admin",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setlocation(e.target.value);
                  }}
                  required
                  placeholder="Location"
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
      <div className="col-lg-6">
        <Table title={() => " View all subAdmins"} />
      </div>
    </div>
  );
}

export default SubAdmin;
