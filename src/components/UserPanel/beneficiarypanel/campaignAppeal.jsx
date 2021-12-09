import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Upload, message,Col } from "antd";
import { UserOutlined, LockOutlined, UploadOutlined } from "@ant-design/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { selectUser } from "../../../store/reducers/User";
require('dotenv').config({ debug: process.env.DEBUG })
const axios = require("axios");

function CampaignAppeal() {
  const [name, setname] = useState("");
  const [description, setdesc] = useState();
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [donation,setDonation]=useState()
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
    formData.append("amountneeded",donation)
    try {
      const res = await axios.post(
        process.env.REACT_APP_CAMPAIGN_URL,
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
          <Input.TextArea showCount maxLength={500} />
          </Col>
        </Form.Item>  
         <Form.Item
          name="Donation amount"
          label="Donation amount"
          onChange={(e) => {
            setDonation(e.target.value);
          }}
          rules={[{ required: true, message: "Please enter donation amount needed" }]}
        >
          <Col span={5}>
          <Input />
          </Col> 
        </Form.Item>
        <Form.Item
          name="Campaign media"
          label=" Give pictures or videos of the campaign here"
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
          <Button type="primary" htmlType="submit" onClick={getData}>
            Submit proposal
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.user.user,
});

export default withRouter(connect(mapStateToProps)(CampaignAppeal));