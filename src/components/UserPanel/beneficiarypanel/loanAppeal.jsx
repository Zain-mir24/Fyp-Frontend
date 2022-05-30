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
  Table,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { selectUser } from "../../../store/reducers/User";
import url from "../../../config/axios"

import "dotenv/config";

const axios = require("axios");

function LoanAppeal(props) {
  console.log(props.userId);
  const [LoanType, setLoantype] = useState("Select Loan type");
  const [loanDesc, setDesc] = useState("");
  const [loanamount, setLoan] = useState(0);
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [data, setData] = useState([]);
  // const [bankAcc, setbankAcc] = useState(0)

  const { Option } = Select;
  const user = useSelector(selectUser);
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const getData = async () => {
    console.log(loanamount);
    const formData = new FormData();
    formData.append("bid", user.userId);
    formData.append("name", user.username);
    formData.append("loandescription", loanDesc);
    formData.append("Loanamount", loanamount);
    formData.append("loanType", LoanType);
    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("isApproved", false);

    try {
      const res = await url.post(
        "/beneficiary/addloanappeal",
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

  const viewData = async () => {
    try {
      const resp = await url.get(
        "/admin/viewLoanAppeals/" + props.userId.userId
      );
      setData(
        resp.data.map((i) => ({
          status: i.status,
          key: i._id,
          Cname: i.name,
          bname: i.bid.name,
          amountneeded: i.Loanamount,
          description: i.loandescription,
          loanType: i.loanType,
          fileName: i.fileName,
          isApproved: i.isApproved.toString(),
        }))
      );

      console.log(resp.data, "HELLOsss");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    viewData();
  }, []);

  const columns = [
    {
      title: "beneficiary name",
      dataIndex: "bname",
      key: "bname",
    },
    {
      title: "Loan requested",
      dataIndex: "amountneeded",
      key: "amountneeded",
      width: "30%",
    },

    {
      title: "description",
      dataIndex: "description",
      key: "desciption",
      width: "30%",
    },
    {
      title: "LoanType",
      dataIndex: "loanType",
      key: "loanType",
    },

    {
      title: "Download File",
      dataIndex: "file",
      key: "file",
      columnWidth: 32,
      render: (text, record) => {
        console.log(record.fileName, "render");
        return record.fileName ? (
          <a href={"https://cryptic-taiga-42129.herokuapp.com/uploads/" + record.fileName} download>
            <Button>Download </Button>
          </a>
        ) : null;
      },
    },
    // {
    //   title: "approval Status",
    //   dataIndex: "isApproved",
    //   key: "isApproved",

    // },
    {
      title: "approve",
      render: (text, record) => <div>{record.status}</div>,
    },
  ];

  return (
    <div>
      <h1>Loan Appeal</h1>
      <h4>
        * Give us description and Enter all your documents including CNIC
        photocopy and Address and reason of your loan
      </h4>
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
          <Select
            placeholder={LoanType}
            onChange={(value) => setLoantype(value)}
            value={LoanType}
          >
            <Option value="6 month installment plan">
              <p style={{ color: "black" }}>6 month installment plan</p>
            </Option>
            <Option value="12 month installment plan">
              <p style={{ color: "black" }}>12 month installment plan</p>
            </Option>
            <Option value="Fullcash">
              <p style={{ color: "black" }}>Full cash</p>
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="Loan Documents"
          label=" Give Documents of your loan here(only zip folder)"
          onChange={saveFile}
          rules={[
            {
              required: true,
              message: "Please share picture or video for the campaign",
            },
          ]}
        >
          <Upload
            maxCount={1}
            accept=".zip">
            <Button icon={<UploadOutlined />}>Upload media files</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="Donation amount"
          label="Loan amount in rupees (RS)"
          rules={[
            { required: true, message: "Please enter donation amount needed" },
          ]}
        >
          <Col span={5}>
            <InputNumber
              style={{ width: "80%" }}
              defaultValue={1000}
              min={1000}
              formatter={(value) =>
                ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              required
              onChange={(value) => {
                setLoan(value);
              }}
            />
          </Col>
        </Form.Item>
        {/* <Form.Item
          name="credit card number"
          label="credit card number"
          rules={[
            { required: true, message: "Please enter 16 digit bank card number" },
          ]}
        >
          <Col span={5}>
            <Input
              onChange={(e) => {
                setbankAcc(e.target.value);
              }}

            />
          </Col>
        </Form.Item> */}
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={getData}>
            Submit proposal
          </Button>
        </Form.Item>
      </Form>

      <h1>Appeal History</h1>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ y: 1100, x: 1900 }}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.persistedReducer.user.user,
});

export default withRouter(connect(mapStateToProps)(LoanAppeal));
