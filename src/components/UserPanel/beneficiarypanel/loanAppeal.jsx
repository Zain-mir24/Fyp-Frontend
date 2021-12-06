import React, { useState } from "react";
import { Form, Input, Button, Dropdown, Menu, message, Select } from "antd";
import { DownOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
function LoanAppeal() {
  const [Loan, setLoan] = useState("Select Loan type");
  const { SubMenu } = Menu;
  const { Option } = Select;
 
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
          <Select  placeholder={Loan}>
            <Option
              value="6 month installment plan"
              onClick={(e) => {
                setLoan(e.target.value);
              }}
              
            >
              6 month installment plan
            </Option>
            <Option value="12 month installment plan"
             onClick={(e) => {
              setLoan(e.target.value);
            }}>12 month installment plan
            </Option>
          </Select>
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
