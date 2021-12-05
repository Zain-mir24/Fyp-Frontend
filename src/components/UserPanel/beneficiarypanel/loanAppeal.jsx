import React, { useState } from "react";
import { Form, Input, Button, Dropdown, Menu, message, Select,Upload} from "antd";
import { DownOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
const axios = require("axios");

function LoanAppeal() {
  const [LoanType, setLoantype] = useState("Select Loan type");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const { SubMenu } = Menu;
  const { Option } = Select;
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  return (
    <div>
      <h1>Loan Appeal</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="Description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please Describe your reasons for loan",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={500} />
        </Form.Item>
        <Form.Item
          name="Campaign media"
          label="Select your loan plan"
          rules={[
            {
              required: true,
              message: "Please enter you loan plan",
            },
          ]}
        >
          <Select placeholder={LoanType}>
            <Option
              value="6 month installment plan"
              onClick={(e) => {
                setLoantype(e.target.value);
              }}
            >
              <p style={{color:"black"}}>
              6 month installment plan

                </p>
                
            </Option>
            <Option
              value="12 month installment plan"
              onClick={(e) => {
                setLoantype(e.target.value);
              }}
            >
           <p style={{color:"black"}}>
              12 month installment plan

                </p>
            </Option>
            <Option
              value="Fullcash"
              onClick={(e) => {
                setLoantype(e.target.value);
              }}
            >
           <p style={{color:"black"}}>
              Full cash

                </p>
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="Loan Documents"
          label=" Give Documents of your loan here"
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
          <Button type="primary" htmlType="submit">
            Submit proposal
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoanAppeal;
