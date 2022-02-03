import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Table,  Button, Input, Upload, Col, Form, Select } from "antd";
import { combineReducers } from "@reduxjs/toolkit";
import { UploadOutlined } from "@ant-design/icons";
import { DatePicker, Space } from 'antd';
import "./Panel.css"
function ChildrenManagment() {
    const [name, setName] = useState();
  const [description, setdesc] = useState();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [assignCategory, setAssignCategory] = useState("");
  return <div>
      <div className="row">
          <h1 className="heading">
              Children Managment
              </h1>
      <div className="col-lg-6">
      <Form>
        add children
          
          <Form.Item
            rules={[{ required: true, message: "Please Enter campaign name" }]}
          >
            <Col span={15}>
              <Input
                required
                placeholder="Child name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Col>
          </Form.Item>
          <Col span={15}>
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
                  setdesc(e.target.value);
                }}
                showCount
                maxLength={1000}
              />
            </Form.Item>
          </Col>
          <Col span={15}>
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
                placeholder="gender"
                 showCount
                maxLength={1000}
              />
            </Form.Item>
          </Col> <Col span={15}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter campaign Description",
                },
              ]}
            >
                <DatePicker />
            </Form.Item>
          </Col>
          <Col span={15}>
            <Form.Item
              rules={[{ required: true, message: "Please uplaod doc" }]}
            //   onChange={saveFile}
            >
              <Upload>
                <Button icon={<UploadOutlined />}>Upload Child's picture</Button>
              </Upload>
            </Form.Item>
          </Col>
      </Form>

        </div>
    </div>
  </div>
}

export default ChildrenManagment;
