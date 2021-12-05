import React, { useState } from "react";
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
} from "antd";
import { DownOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { selectUser } from "../../../store/reducers/User";
const axios = require("axios");

function LoanAppeal() {
  const [LoanType, setLoantype] = useState("Select Loan type");
  const [loanDesc, setDesc] = useState("");
  const [loanamount, setLoan] = useState(0);
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const { SubMenu } = Menu;
  const { Option } = Select;
  const user = useSelector(selectUser);
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const getData = async () => {
    const formData = new FormData();
    formData.append("bid", user.userId);
    formData.append("name", user.username);
    formData.append("loandescription", loanDesc);
    formData.append("Loanamount", loanamount);
    formData.append("loanType", LoanType);
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(process.env.REACT_APP_LOAN_URL, formData);
      console.log(res, "Successfully send");
      alert(`${user.username} \n 
       Your form has been submitted`);
    } catch (ex) {
      alert(`${user.username} \n 
      Your form was not submitted`);
      console.log(ex);
    }
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
          onChange={(e) => {
            setDesc(e.target.value);
          }}
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
              <p style={{ color: "black" }}>6 month installment plan</p>
            </Option>
            <Option
              value="12 month installment plan"
              onClick={(e) => {
                setLoantype(e.target.value);
              }}
            >
              <p style={{ color: "black" }}>12 month installment plan</p>
            </Option>
            <Option
              value="Fullcash"
              onClick={(e) => {
                setLoantype(e.target.value);
              }}
            >
              <p style={{ color: "black" }}>Full cash</p>
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
        <Form.Item
          name="Donation amount"
          label="Loan amount in rupees"
         
          rules={[
            { required: true, message: "Please enter donation amount needed" },
          ]}
        >
          <Col span={5}>
            <Input  onChange={(e) => {
            setLoan(e.target.value);
          }}/>
          </Col>
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

export default withRouter(connect(mapStateToProps)(LoanAppeal));
