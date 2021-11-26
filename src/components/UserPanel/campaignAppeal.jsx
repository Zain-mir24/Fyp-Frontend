import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Upload, message } from "antd";
import { UserOutlined, LockOutlined, UploadOutlined } from "@ant-design/icons";

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
  const [getname, setname] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  return (
    <div>
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
          rules={[{ required: true, message: "Please Describe your campaign" }]}
        >
          <Input.TextArea showCount maxLength={500} />
        </Form.Item>
        <Form.Item
          name="Campaign media"
          label=" Give pictures or videos of the campaign here"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
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
           
          >
            Submit proposal
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CampaignAppeal;
