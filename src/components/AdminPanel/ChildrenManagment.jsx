import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Table, Button, Input, Upload, Col, Form, Select, Row } from "antd";
import { combineReducers } from "@reduxjs/toolkit";
import { UploadOutlined } from "@ant-design/icons";

import { DatePicker, Space } from "antd";
import "./Panel.css";
import axios from "axios";

function ChildrenManagment() {
  const [name, setName] = useState();
  const [childrenData, setChildrenData] = useState();
  const [age, setAge] = useState();
  const [file, setFile] = useState();
  // const [fileName, setFileName] = useState("");
  const [DOB, setDOB] = useState("");
  const [POB, setPOB] = useState("");
  const [gender, setGender] = useState([]);
  const [disability, setDisability] = useState("");

  async function sendData() {
    try {
      const res = await axios.post("http://localhost:9000/admin/addchild", {
        name: name,
        age: age,
        fileName: file,
        DOB: DOB,
        POB: POB,
        disability: disability,
        fileName: file,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/viewChildren");
      setChildrenData(res.data);
      console.log(res.data, "TESTING");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const res = axios.delete(
        "http://localhost:9000/admin/deletecategory/" + id
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="row">
        <div style={{ textAlign: "center" }} s>
          <h1 className="heading">Children Managment</h1>
        </div>
        <br /> <br /> <br /> <br />
        <Row>
          <Col span={12}>
            <h3>Add Children</h3>
            <Form>
              <Form.Item
                rules={[
                  { required: true, message: "Please Enter campaign name" },
                ]}
              >
                <Input
                  required
                  placeholder="Child name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
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
                <Input.TextArea
                  required
                  placeholder="Child age"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  showCount
                  maxLength={1000}
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
                  required
                  placeholder="gender"
                  showCount
                  maxLength={1000}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
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
                <DatePicker
                  onChange={(e) => {
                    setDOB(e.target.value);
                  }}
                  placeholder="Select Date Of Birth"
                  style={{ width: "100%" }}
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
                <DatePicker
                  onChange={(e) => {
                    setPOB(e.target.value);
                  }}
                  placeholder="Select Place Of Birth"
                  style={{ width: "100%" }}
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
                  required
                  placeholder="Disability"
                  showCount
                  maxLength={1000}
                  onChange={(e) => {
                    setDisability(e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item
                rules={[{ required: true, message: "Please uplaod doc" }]}
                //   onChange={saveFile}
              >
                <Upload>
                  <Button icon={<UploadOutlined />}>
                    Upload Child's picture
                  </Button>
                </Upload>
              </Form.Item>

              <Button type="primary">Submit</Button>
            </Form>
          </Col>

          <Col span={12}>
            <h3>Update Children</h3>
            <Form>
              <Form.Item
                rules={[
                  { required: true, message: "Please Enter campaign name" },
                ]}
              >
                <Input
                  required
                  placeholder="Child name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
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
                <Input.TextArea
                  required
                  placeholder="Child age"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  showCount
                  maxLength={1000}
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
                  required
                  placeholder="gender"
                  showCount
                  maxLength={1000}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
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
                <DatePicker
                  onChange={(e) => {
                    setDOB(e.target.value);
                  }}
                  placeholder="Select Date Of Birth"
                  style={{ width: "100%" }}
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
                <DatePicker
                  onChange={(e) => {
                    setPOB(e.target.value);
                  }}
                  placeholder="Select Place Of Birth"
                  style={{ width: "100%" }}
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
                  required
                  placeholder="Disability"
                  showCount
                  maxLength={1000}
                  onChange={(e) => {
                    setDisability(e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item
                rules={[{ required: true, message: "Please uplaod doc" }]}
                //   onChange={saveFile}
              >
                <Upload>
                  <Button icon={<UploadOutlined />}>
                    Upload Child's picture
                  </Button>
                </Upload>
              </Form.Item>

              <Button
                type="primary"
                onSubmit={() => {
                  getData();
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ChildrenManagment;
