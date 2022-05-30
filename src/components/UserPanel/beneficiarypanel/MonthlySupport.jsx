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
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import url from "../../../config/axios"

const axios = require("axios");

export default function MonthlySupport() {
  const user = useSelector(selectUser);

  const [bid, setBid] = useState();
  const [phone, setphone] = useState("");
  const [cnic, setcnic] = useState(0);
  const [category, setcategory] = useState("");
  const [sourceOfIncome, setsourceOfIncome] = useState("");
  const [presentAddress, setpresentAddress] = useState("");
  const [totalIncome, settotalIncome] = useState(0);
  const [totalExpenses, settotalExpenses] = useState(0);
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
  const [widowSiblingAge, setwidowSiblingAge] = useState(0);
  const [widowSiblingRelation, setwidowSiblingRelation] = useState("");
  const [widowSiblingActivities, setwidowSiblingActivities] = useState("");
  const [widowSiblingIncome, setwidowSiblingIncome] = useState(0);
  const [medicineCost, setmedicineCost] = useState(0);
  const [bform, setbform] = useState("");
  const [bformname, setbformname] = useState("");
  const [deathcertificate, setdeathcertificate] = useState("");
  const [deathcertificatename, setdeathcertificatename] = useState("");
  const [totalamountdonation, settotalamountdonation] = useState(0);
  useEffect(() => {
    console.log(user.userId)
    setBid(user.userId);
  }, []);
  const { Option } = Select;
  const saveBform = (e) => {
    setbform(e.target.files[0]);
    setbformname(e.target.files[0].name);
  };
  const saveDeathCertificate = (e) => {
    setdeathcertificate(e.target.files[0]);
    setdeathcertificatename(e.target.files[0].name);
  };
  var widowfamdetail = [
    {
      name: widowName,
      age: widowAge,
      relation: widowRelation,
      activities: widowActivities,
      income: widowIncome,
    },
  ]
  var widowSibilings = [
    {
      name: widowSiblingName,
      age: widowSiblingAge,
      relation: widowSiblingRelation,
      activities: widowSiblingActivities,
      income: widowSiblingIncome,
    }
  ]
  const getData = async () => {
    console.log(phone, "phonenumber")
    await setBid(user.userId);
    const formData = new FormData();
    formData.append("bid", bid);
    formData.append("phoneNumber", phone);
    formData.append("cnic", cnic);
    formData.append("category", category);
    formData.append("Sourceofincome", sourceOfIncome);
    formData.append("presentAddress", presentAddress);
    formData.append("Totalincome", totalIncome);
    formData.append("Totalexpenses", totalExpenses);
    formData.append("NativeTown", nativeTown);
    formData.append("self", self);
    formData.append("donated", donated);
    formData.append("rental", rental);
    formData.append("rent", rent);
    formData.append("widowfamdetail", JSON.stringify(widowfamdetail));
    formData.append("widowsibilings", JSON.stringify(widowSibilings));
    formData.append("medicineCost", medicineCost)
    formData.append("bform", bform)
    formData.append("bformname", bformname)
    formData.append("deathcertificate", deathcertificate)
    formData.append("deathcertificatename", deathcertificatename)
    formData.append("totalamountdonation", totalamountdonation)
    try {
      const res = await url.post(
        "/User/MonthlyAppeal",
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
  return (
    <div style={{ height: "600px", overflow: "scroll" }}>
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
          name="Phone"
          label="Phone: "
          rules={[
            {
              required: true,
              message: "Please enter your phone Number",
            },
          ]}
        >
          <PhoneInput
            onChange={setphone}
          />
        </Form.Item>
        <Form.Item
          name="CNIC"
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
          name="category"
          label="Category: "
          rules={[
            {
              required: true,
              message: "Please enter your Category",
            },
          ]}
        >
          <Input
            placeholder="For example Widow"
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          name="Source of income"
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
          name="present Address"
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
          name="Total income"
          label="Total Income: "
          rules={[
            {
              required: true,
              message: "Please enter your Total Income",
            },
          ]}
        >
          <InputNumber
            style={{ width: "40%" }}
            defaultValue={1000}
            min={1000}
            formatter={value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            required
            onChange={(value) => {
              settotalIncome(value);
            }}
          />
        </Form.Item>
        <Form.Item
          name="Expenses"
          label="Total Expenses "
          rules={[
            {
              required: true,
              message: "Please enter your Total Expenses",
            },
          ]}
        >
          <InputNumber
            style={{ width: "40%" }}
            defaultValue={1000}
            min={1000}
            formatter={value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            required
            onChange={(e) => {
              settotalExpenses(e);
            }}
          />
        </Form.Item>
        <Form.Item
          name="Native town"
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
          name="Self"
          label="SELF:"
          rules={[
            {
              required: true,
              message: "Please enter your Self Accommodation",
            },
          ]}
        >
          <Input
            placeholder="Enter info if yes other wise type no"

            onChange={(e) => {
              setself(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          name="Donation amount needed"
          label="Donated: "
          rules={[
            {
              required: true,
              message: "Please enter your Donated Amount",
            },
          ]}
        >
          <Input
            placeholder="Enter info if yes other wise type no"
            onChange={(e) => {
              setdonated(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          name="Enter rental"

          label="rental: "
          rules={[
            {
              required: true,
              message: "Please enter your rental information",
            },
          ]}
        >
          <Input
            placeholder="Enter info if yes other wise type no"

            onChange={(e) => {
              setrental(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          name="Enter rent"

          label="rent: "
          rules={[
            {
              required: true,
              message: "Please enter your rent",
            },
          ]}
        >
          <Input
            placeholder="Enter info if yes other wise type no"

            onChange={(e) => {
              setrent(e.target.value);
            }}
          />
        </Form.Item>
        <br />
        <h4>Widow Details (optional)</h4>
        <br />
        <Form.Item
          label="Name: "

        >
          <Input
            onChange={(e) => {
              setwidowName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Age: "

        >
          <Input
            onChange={(e) => {
              setwidowAge(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Relation: "

        >
          <Input
            onChange={(e) => {
              setwidowRelation(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Activities: "

        >
          <Input
            onChange={(e) => {
              setwidowActivities(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Income: "

        >
          <Input
            onChange={(e) => {
              setwidowIncome(e.target.value);
            }}
          />
        </Form.Item>
        <br />
        <h4>Widow Siblings Detail (optional)</h4>
        <br />
        <Form.Item
          label="Name: "
        >
          <Input
            onChange={(e) => {
              setwidowSiblingName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Age: "

        >
          <Input
            onChange={(e) => {
              setwidowSiblingAge(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Relation: "

        >
          <Input
            onChange={(e) => {
              setwidowSiblingRelation(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Activities: "

        >
          <Input
            onChange={(e) => {
              setwidowSiblingActivities(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Income: "

        >
          <Input
            onChange={(e) => {
              setwidowSiblingIncome(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          name="Medicine cost"
          label="Medicine Cost: "
          rules={[
            {
              required: true,
              message: "Please enter your Medicine Cost",
            },
          ]}
        >
          <InputNumber
            style={{ width: "40%" }}
            defaultValue={1000}
            min={1000}
            formatter={value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            required
            onChange={(e) => {
              setmedicineCost(e);
            }}
          />
        </Form.Item>
        <Form.Item
          name="Bform"
          label="Attach Bform(pdf only)"
          onChange={saveBform}
          rules={[
            {
              required: true,
              message: "Please share picture or video for the campaign",
            },
          ]}
        >
          <Upload accept=".pdf">
            <Button icon={<UploadOutlined />}>Upload media files</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label="Attach Death Certificate of husband if widow (optional)(pdfonly)"
          onChange={saveDeathCertificate}

        >
          <Upload accept=".pdf">
            <Button icon={<UploadOutlined />}>Upload media files</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="Enter total donation"
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
          <Button type="primary" htmlType="submit" onClick={() => {
            setBid(user.userId)
            getData()
          }}>
            Submit proposal
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
