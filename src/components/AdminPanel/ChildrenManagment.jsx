import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Table, Button, Input, Upload, Col, Form, Select, Row } from "antd";

import { combineReducers } from "@reduxjs/toolkit";
import { UploadOutlined } from "@ant-design/icons";
import { selectUser } from "../../store/reducers/User";
import { useSelector } from "react-redux";
import { DatePicker, Space } from "antd";
import "./Panel.css";
import axios from "axios";

const { Option } = Select;

function ChildrenManagment() {
  const [name, setName] = useState();
  const [childrenData, setChildrenData] = useState([]);
  const [age, setAge] = useState();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  // const [fileName, setFileName] = useState("");
  const [DOB, setDOB] = useState("");
  const [POB, setPOB] = useState("");
  const [gender, setGender] = useState([]);
  const [disability, setDisability] = useState("");
  const [updateID, setUpdateID] = useState("");
  const user = useSelector(selectUser);
   const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  async function collectData() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("DOB", DOB);
    formData.append("POB", POB);
    formData.append("disability", disability);
    formData.append("file", file);
    formData.append("fileName", fileName);
    console.log(formData)
    try {
      const res = await axios.post(
        "http://localhost:9000/admin/addchild",
         formData ,
        {
          headers: { Authorization: `Bearer ${user.verifToken}` },
        }
      );
      if (!res) {
        return console.log("couldnt add");
      }
      alert(`Child has been added`);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/viewChildren");

      await setChildrenData(res.data);
      console.log(res.data, "TESTING");
    } catch (err) {
      console.log(err);
    }
  };

  async function updateData() {
    const res = await axios.patch(
      "http://localhost:9000/admin//updatechild/" + updateID,
      {
        name: name,
        age: age,
        fileName: file,
        gender: gender,
        DOB: DOB,
        POB: POB,
        disability: disability,
      }
    );
  }

  const deleteData = async (cid) => {
    try {
      const res = await axios.delete(
        "http://localhost:9000/admin/deleteChildren/" + cid
      );
      alert("Children data Deleted");

      console.log(res);
    } catch (e) {
      alert("campaign not deleted");
      console.log(e);
    }
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
    setUpdateID(value);
  }

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "DOB",
      dataIndex: "DOB",
      key: "DOB",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <button
          onClick={() => {
            deleteData(record._id);
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  const value = childrenData.map((item) => ({
    _id: item._id,
    name: item.name,
    gender: item.gender,
    age: item.age,
    DOB: item.DOB,
  }));

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
                <Input
                  required
                  placeholder="Child age"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  showCount
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
                  onChange={(date, dateString) => {
                    setDOB(date);
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
                <Input
                  onChange={(date, dateString) => {
                    setPOB(date);
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
                onChange={saveFile}
              >
                <Upload>
                  <Button icon={<UploadOutlined />}>
                    Upload Child's picture
                  </Button>
                </Upload>
              </Form.Item>

              <Button type="primary" onClick={collectData}>
                Submit
              </Button>
            </Form>
          </Col>

          <Col span={12}>
            <h3>Update Children</h3>
            <Form>
              <Form.Item>
                <Select
                  defaultValue="Select Category"
                  style={{
                    width: 180,
                    borderRadius: "0px",
                    backgroundColor: "transparent",
                  }}
                  onChange={handleChange}
                >
                  {childrenData.map((item) => {
                    return <Option value={item._id}>{item.name}</Option>;
                  })}
                </Select>
              </Form.Item>
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
                  onChange={(date, dateString) => {
                    setDOB(date);
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
                <Input
                  onChange={(date, dateString) => {
                    setPOB(date);
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
                rules={[{ message: "Please uplaod doc" }]}
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
                onClick={() => {
                  updateData();
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Table columns={columns} dataSource={value} />
      </div>
    </div>
  );
}

export default ChildrenManagment;
