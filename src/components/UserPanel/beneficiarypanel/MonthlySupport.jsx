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
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { selectUser } from "../../../store/reducers/User";
const axios = require("axios");

export default function MonthlySupport() {
  const [bid, setBid] = useState("121312313");
  const [phone, setphone] = useState("");
  const [cnic, setcnic] = useState("");
  const [category, setcategory] = useState("");
  const [sourceOfIncome, setsourceOfIncome] = useState("");
  const [presentAddress, setpresentAddress] = useState("");
  const [totalIncome, settotalIncome] = useState("");
  const [totalExpenses, settotalExpenses] = useState("");
  const [nativeTown, setnativeTown] = useState("");
  const [self, setself] = useState("");
  const [donated, setdonated] = useState("");
  const [rental, setrental] = useState("");
  const [rent, setrent] = useState("");
  const [widowName, setwidowName] = useState("");
  const [widowAge, setwidowAge] = useState("");
  const [widowRelation, setwidowRelation] = useState("");
  const [widowActivities, setwidowActivities] = useState("");
  const [widowIncome, setwidowIncome] = useState("");
  const [widowSiblingName, setwidowSiblingName] = useState("");
  const [widowSiblingAge, setwidowSiblingAge] = useState("");
  const [widowSiblingRelation, setwidowSiblingRelation] = useState("");
  const [widowSiblingActivities, setwidowSiblingActivities] = useState("");
  const [widowSiblingIncome, setwidowSiblingIncome] = useState("");
  const [medicineCost, setmedicineCost] = useState("");
  const [bform, setbform] = useState("");
  const [deathcertificate, setdeathcertificate] = useState("");
  const [totalamountdonation, settotalamountdonation] = useState("");

  const { Option } = Select;
  const user = useSelector(selectUser);
  const saveBform = (e) => {
    setbform(e.target.files[0]);
  };
  const saveDeathCertificate = (e) => {
    setdeathcertificate(e.target.files[0]);
  };

  const getData = async () => {
    try {
      const res = await axios.post(process.env.REACT_APP_LOAN_URL, {
        bid: bid,
        phoneNumber: phone,
        cnic: cnic,
        category: category,
        Sourceofincome: sourceOfIncome,
        presentAddress: presentAddress,
        Totalincome: totalIncome,
        Totalexpenses: totalExpenses,
        NativeTown: nativeTown,
        Accomodation: {
          self: self,
          donated: donated,
          rental: rental,
          rent: rent,
        },
        widowfamdetail: [
          {
            name: widowName,
            age: widowAge,
            relation: widowRelation,
            activities: widowActivities,
            income: widowIncome,
          },
        ],
        widowsibilings: [
          {
            name: widowSiblingName,
            age: widowSiblingAge,
            relation: widowSiblingRelation,
            activities: widowSiblingActivities,
            income: widowSiblingIncome,
          },
        ],
        medicineCost: medicineCost,
        bform: bform,
        deathcertificate: deathcertificate,
        totalamountdonation: totalamountdonation,
      });
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
      <div style={{ textAlign: "center" }}>
        {" "}
        <h1>Monthly Support Form</h1>
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
          label="Phone: "
          rules={[
            {
              required: true,
              message: "Please enter your phone Number",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setphone(e.target.value);
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
              setcnic(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Category: "
          rules={[
            {
              required: true,
              message: "Please enter your Category",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Source Of Income "
          rules={[
            {
              required: true,
              message: "Please enter your Source Of Income",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setsourceOfIncome(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Present Address: "
          rules={[
            {
              required: true,
              message: "Please enter your Present Address",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setpresentAddress(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Total Income: "
          rules={[
            {
              required: true,
              message: "Please enter your Total Income",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              settotalIncome(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Total Expenses "
          rules={[
            {
              required: true,
              message: "Please enter your Total Expenses",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              settotalExpenses(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Native Town "
          rules={[
            {
              required: true,
              message: "Please enter your Native Town",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setnativeTown(e.target.value);
            }}
          />
        </Form.Item>
        <br />
        <h4>ACCOMMODATION</h4>
        <br />
        <Form.Item
          label="SELF:"
          rules={[
            {
              required: true,
              message: "Please enter your Self Accommodation",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setself(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Donated: "
          rules={[
            {
              required: true,
              message: "Please enter your Donated Amount",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setdonated(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="rental: "
          rules={[
            {
              required: true,
              message: "Please enter your rental information",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setrental(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="rent: "
          rules={[
            {
              required: true,
              message: "Please enter your rent",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setrent(e.target.value);
            }}
          />
        </Form.Item>
        <br />
        <h4>Widow Details</h4>
        <br />
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
              setwidowName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Age: "
          rules={[
            {
              required: true,
              message: "Please enter your CNIC",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setwidowAge(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Relation: "
          rules={[
            {
              required: true,
              message: "Please enter your Relation status",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setwidowRelation(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Activities: "
          rules={[
            {
              required: true,
              message: "Please enter your Activities",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setwidowActivities(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Income: "
          rules={[
            {
              required: true,
              message: "Please enter your Income",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setwidowIncome(e.target.value);
            }}
          />
        </Form.Item>
        <br />
        <h4>Widow Siblings Detail</h4>
        <br />
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
              setwidowSiblingName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Age: "
          rules={[
            {
              required: true,
              message: "Please enter your Age",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setwidowSiblingAge(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Relation: "
          rules={[
            {
              required: true,
              message: "Please enter your Relation",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setwidowSiblingRelation(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Activities: "
          rules={[
            {
              required: true,
              message: "Please enter your Activities",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setwidowSiblingActivities(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Income: "
          rules={[
            {
              required: true,
              message: "Please enter your Income",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setwidowSiblingIncome(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Medicine Cost: "
          rules={[
            {
              required: true,
              message: "Please enter your Medicine Cost",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setmedicineCost(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Attach Bform"
          onChange={saveBform}
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
          label="Attach Death Certificate"
          onChange={saveDeathCertificate}
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
          label="Total Donation Amount: "
          rules={[
            {
              required: true,
              message: "Please enter your Total Donation Amount",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              settotalamountdonation(e.target.value);
            }}
          />
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
