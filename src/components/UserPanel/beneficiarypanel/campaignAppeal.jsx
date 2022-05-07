import React, { useState } from "react";
import { Form, Input, InputNumber, Button, Checkbox, Upload, message, Col } from "antd";
import { UserOutlined, LockOutlined, UploadOutlined } from "@ant-design/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { selectUser } from "../../../store/reducers/User";
require("dotenv").config({ debug: process.env.DEBUG });
const axios = require("axios");

function CampaignAppeal() {
  const [name, setname] = useState("");
  const [description, setdesc] = useState();
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [donation, setDonation] = useState(0);
  const user = useSelector(selectUser);
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const getData = async () => {
    const formData = new FormData();
    formData.append("bid", user.userId);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("amountneeded", donation);
    try {
      const res = await axios.post(
        "http://localhost:9000/beneficiary/addCampaignappeal",
        formData
      );
      console.log(res, "Successfully send");
      alert(`${user.username} \n 
        Your form has been submitted`);
    } catch (ex) {
      alert(`${user.username} \n 
      Your form was not  submitted`);
      console.log(ex);
    }
  };

  return (
    <div>
      <h1>Campaign Appeal</h1>
      <h4>
        *Give us description and Enter all your documents including CNIC
        photocopy and Address so we can verify your appeal.
        <br />
        <br />
        Put it in a zip Folder Thankyou!
      </h4>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="Campaignname"
          label="Campaign name"
          onChange={(e) => {
            setname(e.target.value);
          }}
          rules={[
            {
              required: true,
              message: "Please input your Campaign name!",
            },
          ]}
        >
          <Col span={10}>
            <Input />
          </Col>
        </Form.Item>{" "}
        <Form.Item
          name="Description"
          label="Description needed"
          onChange={(e) => {
            setdesc(e.target.value);
          }}
          rules={[{ required: true, message: "Please Describe your campaign" }]}
        >
          <Col span={10}>
            <Input.TextArea showCount maxLength={1000} />
          </Col>
        </Form.Item>
        <Form.Item
          name="Donation amount"
          label="Donation amount"

          rules={[
            { required: true, message: "Please enter donation amount needed" },
          ]}
        >
          <Col span={5}>
            <InputNumber
              style={{ width: "80%" }}
              defaultValue={1000}
              min={1000}
              formatter={value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              required
              onChange={(value) => {
                setDonation(value);
              }}
            />
          </Col>
        </Form.Item>
        <Form.Item
          name="Campaign media"
          label=" Upload zip folder containing all media and doc"
          onChange={saveFile}
          rules={[
            {
              required: true,
              message: "Please upload zip folder containing all your documents",
            },
          ]}
        >
          <Upload accept=".zip">
            <Button icon={<UploadOutlined />}>Upload media files</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={getData}>
            Submit proposal
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.persistedReducer.user.user,
});

export default withRouter(connect(mapStateToProps)(CampaignAppeal));
