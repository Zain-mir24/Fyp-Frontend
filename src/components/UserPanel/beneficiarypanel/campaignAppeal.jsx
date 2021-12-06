import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Upload, message } from "antd";
import { UserOutlined, LockOutlined, UploadOutlined } from "@ant-design/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { selectUser } from "../../../store/reducers/User";

const axios = require("axios");

function onChange(info) {
  if (info.file.status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === "done") {
    message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
}

function CampaignAppeal() {
  const [name, setname] = useState("");
  const [description, setdesc] = useState();
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const user = useSelector(selectUser);

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const getData = async () => {
    const formData = new FormData();
    formData.append("bid",user.userId)
    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "http://localhost:9000/beneficiary/addCampaignappeal",
        formData
      );
      console.log(res,"Successfully send");
    } catch (ex) {
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
          label="Campaigname"
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
          <Input />
        </Form.Item>{" "}
        <Form.Item
          name="Description"
          label="Description"
          onChange={(e)=>{
            setdesc(e.target.value)
          }}
          rules={[{ required: true, message: "Please Describe your campaign" }]}
        >
          <Input.TextArea showCount maxLength={500} />
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
