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
  Radio,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { selectUser } from "../../../store/reducers/User";
const axios = require("axios");

export default function HouseAppeal() {
  const user = useSelector(selectUser);
  const [bid, setBid] = useState();
  const [Deservername, setDeserverName] = useState();
  const [Guardian, setGuardian] = useState();
  const [Status, setStatus] = useState();
  const [cnic, setCnic] = useState();
  const [cell, setCell] = useState();
  const [Dependents, setDependents] = useState();
  const [Sourceofincome, setSourceofincome] = useState();
  const [Monthlyincome, setMonthlyincome] = useState();
  const [address, setAddress] = useState();
  const [accomodationself, setAccomodationSelf] = useState();
  const [accomodationdonated, setAccomodationDonated] = useState();
  const [accomodationrental, setAccomodationRental] = useState();
  const [ownerofland, setOwnerOfLand] = useState();
  const [PlotDimensions, setPlotDimensions] = useState();
  const [EstimatedCost, setEstimatedCost] = useState();
  const [EstimatedTimeFrame, setEstimatedTimeFrame] = useState();
  const [contructionDetail, setConstructionDetail] = useState();
  const [family, setFamily] = useState([]);
  const [familyName, setFamilyName] = useState();
  const [familyAge, setFamilyAge] = useState();
  const [familyStudy, setFamilyStudy] = useState(false);
  const [familyAlive, setFamilyAlive] = useState(true);
  const [images, setImages] = useState();
  const [fileName, setFileName] = useState();
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState();

  const saveFile = (e) => {
    setImages(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const getData = async () => {
    console.log(images);
    await setBid(user.userId);
    const formData = new FormData();
    formData.append("bid", bid);
    formData.append("Deservername", Deservername);
    formData.append("Guardian", Guardian);
    formData.append("Status", Status);
    formData.append("cnic", cnic);
    formData.append("cell", cell);
    formData.append("Dependents", Dependents);
    formData.append("Sourceofincome", Sourceofincome);
    formData.append("Monthlyincome", Monthlyincome);
    formData.append("address", address);
    formData.append("accomodationself", accomodationself);
    formData.append("accomodationdonated", accomodationdonated);
    formData.append("accomodationrental", accomodationrental);
    formData.append("ownerofland", ownerofland);
    formData.append("PlotDimensions", PlotDimensions);
    formData.append("EstimatedCost", EstimatedCost);
    formData.append("EstimatedTimeFrame", EstimatedTimeFrame);
    formData.append("contructionDetail", contructionDetail);
    formData.append("images", images);
    formData.append("fileName", fileName);
    formData.append("family", JSON.stringify(family));
    try {
      const res = await axios.post(
        "http://localhost:9000/admin/addhousingScheme",
        formData
      );
      console.log(res, "Successfully send");
      alert(`${user.username} \n 
           Your form has been submitted`);
    } catch (ex) {
      alert(`${user.username} \n 
          Your form was not submitted`);
      console.log(ex);
    }
  };

  const AddFamily = () => {
    setFamily((family) => [
      ...family,
      {
        name: familyName,
        age: familyAge,
        study: familyStudy,
        alive: familyAlive,
      },
    ]);
    setCount(count + 1);
  };

  return (
    <div>
      {" "}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Name: "
          rules={[
            {
              required: true,
              message: "Please enter your Name",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setDeserverName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Guardian: "
          rules={[
            {
              required: true,
              message: "Please enter your Guardian Name",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setGuardian(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Status: "
          rules={[
            {
              required: true,
              message: "Please enter your Status",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="CNIC: "
          rules={[
            {
              required: true,
              message: "Please enter your CNIC",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setCnic(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Cell: "
          rules={[
            {
              required: true,
              message: "Please enter your Cell:",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setCell(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Dependents: "
          rules={[
            {
              required: true,
              message: "Please enter your Dependents",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setDependents(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Source Of Income: "
          rules={[
            {
              required: true,
              message: "Please enter your Source Of Income",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setSourceofincome(e.target.value);
            }}
          />
        </Form.Item>
        <br />
        <div style={{ textAlign: "left" }}>
          <h1>{count} Family Member Added</h1>
        </div>
        <br />
        <Form.Item
          label="Name: "
          rules={[
            {
              required: true,
              message: "Please enter Family Member Name",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setFamilyName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Age: "
          rules={[
            {
              required: true,
              message: "Please enter Family Member Age",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setFamilyAge(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Studying: "
          rules={[
            {
              required: true,
              message: "Please enter Study Status",
            },
          ]}
        >
          <Radio.Group
            onChange={(e) => {
              setFamilyStudy(e.target.value);
            }}
            value={familyStudy}
          >
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Alive: "
          rules={[
            {
              required: true,
              message: "Please enter Living Status",
            },
          ]}
        >
          <Radio.Group
            onChange={(e) => {
              setFamilyAlive(e.target.value);
            }}
            value={familyAlive}
          >
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>

        <br />
        <div style={{ textAlign: "right" }}>
          <button onClick={AddFamily}>Add</button>
        </div>
        <br />
        <Form.Item
          label="Monthly Income: "
          rules={[
            {
              required: true,
              message: "Please enter your Monthly Income",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setMonthlyincome(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Address: "
          rules={[
            {
              required: true,
              message: "Please enter your Address",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Accommodation Self: "
          rules={[
            {
              required: true,
              message: "Please enter your Accomodation Self",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setAccomodationSelf(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Accomodation Donated: "
          rules={[
            {
              required: true,
              message: "Please enter your Accomodation Donated",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setAccomodationDonated(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Accomodation Rent: "
          rules={[
            {
              required: true,
              message: "Please enter your Accomodation rent",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setAccomodationRental(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Owner Of Land: "
          rules={[
            {
              required: true,
              message: "Please enter your Land Owner Name",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setOwnerOfLand(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Plot Dimensions: "
          rules={[
            {
              required: true,
              message: "Please enter your Plot Dimensions",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setPlotDimensions(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Estimated Cost: "
          rules={[
            {
              required: true,
              message: "Please enter your Estimated Cost",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setEstimatedCost(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Estimated Time Frame: "
          rules={[
            {
              required: true,
              message: "Please enter your Estimated Time Frame",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setEstimatedTimeFrame(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Construction Detail: "
          rules={[
            {
              required: true,
              message: "Please enter your Construction Detail",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setConstructionDetail(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Attach Images"
          onChange={saveFile}
          rules={[
            {
              required: true,
              message: "Please share picture or video for the campaign",
            },
          ]}
        >
          <Upload>
            <Button icon={<UploadOutlined />}>Upload media files</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              //   setBid(user.userId);
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
