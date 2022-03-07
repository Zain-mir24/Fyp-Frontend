import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Dropdown,
  Menu,
  message,
  Select,
  Upload,
  Col,
  InputNumber,
  DatePicker,
  Space,
  Rate,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const axios = require("axios");

export default function EstimationPerfoma() {
  const [project, setProject] = useState();
  const [location, setLocation] = useState();
  const [caretaker, setCaretaker] = useState();
  const [cellno, setCellno] = useState();
  const [date, setDate] = useState();
  const [material, setMaterial] = useState([]);
  const [materialName, setMaterialName] = useState();
  const [materialAU, setMaterialAU] = useState();
  const [materialQTY, setMaterialQTY] = useState(0);
  const [materialRate, setMaterialRate] = useState(0);
  const [materialCost, setMaterialCost] = useState(0);

  useEffect(() => {}, []);
  const { Option } = Select;

  //   var widowfamdetail = [
  //     {
  //       name: widowName,
  //       age: widowAge,
  //       relation: widowRelation,
  //       activities: widowActivities,
  //       income: widowIncome,
  //     },
  //   ];
  //   var widowSibilings = [
  //     {
  //       name: widowSiblingName,
  //       age: widowSiblingAge,
  //       relation: widowSiblingRelation,
  //       activities: widowSiblingActivities,
  //       income: widowSiblingIncome,
  //     },
  //   ];
  const getData = async () => {
    const formData = new FormData();
    formData.append("project", project);
    formData.append("location", location);
    formData.append("caretaker", caretaker);
    formData.append("cellno", cellno);

    try {
      const res = await axios.post(
        "http://localhost:9000/User/MonthlyAppeal",
        formData
      );
      console.log(res, "Successfully send");
      alert(`$ \n 
         Your form has been submitted`);
    } catch (ex) {
      alert(`$ \n 
        Your form was not submitted`);
      console.log(ex);
    }
  };

  function costChangeQTY(e) {
    setMaterialQTY(e.target.value);
    setMaterialCost(materialRate * materialQTY);
  }
  function costChangeRate(e) {
    setMaterialRate(e.target.value);
    setMaterialCost(materialRate * materialQTY);
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {" "}
        <h1>Estimation Performa</h1>
      </div>
      <br />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Project: "
          rules={[
            {
              required: true,
              message: "Please enter your Project Name",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setProject(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Location: "
          rules={[
            {
              required: true,
              message: "Please enter your Location",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Caretaker: "
          rules={[
            {
              required: true,
              message: "Please enter Caretaker",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setCaretaker(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Date: "
          rules={[
            {
              required: true,
              message: "Please enter Caretaker",
            },
          ]}
        >
          <DatePicker
            onChange={(date, dateString) => {
              setDate(dateString);
            }}
          />
        </Form.Item>
        <br />
        <h4>Material Detail</h4>
        <br />
        <Form.Item
          label="Name: "
          rules={[
            {
              required: true,
              message: "Please enter Material Name",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setMaterialName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="AU: "
          rules={[
            {
              required: true,
              message: "Please enter Material AU",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setMaterialAU(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="QTY: "
          rules={[
            {
              required: true,
              message: "Please enter QTY",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              costChangeQTY(e);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Rate: "
          rules={[
            {
              required: true,
              message: "Please enter Caretaker",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              costChangeRate(e);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Cost: "
          rules={[
            {
              required: true,
              message: "Please enter Caretaker",
            },
          ]}
        >
          <Input value={materialCost} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              getData();
            }}
          >
            Submit proposal
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
