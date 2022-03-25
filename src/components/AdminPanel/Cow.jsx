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
  DatePicker,
  Space,
  Rate,
  Table,
} from "antd";
import axios from "axios";
const { Option } = Select;
const { TextArea } = Input;

export default function Cow() {
  const [donor, setDonor] = useState([]);
  const [donatedAmount, setDonatedAmount] = useState();
  const [donorId, setDonorId] = useState();
  const [deserverName, setDeserverName] = useState();
  const [cnic, setCnic] = useState();
  const [cell, setCell] = useState();
  const [status, setStatus] = useState();
  const [family, setFamily] = useState();
  const [accountNo, setAccountNo] = useState();
  const [sourceOfIncome, setSourceOfIncome] = useState();
  const [cowPrice, setCowPrice] = useState();
  const [cowOwner, setCowOwner] = useState();
  const [finalPrice, setFinalPrice] = useState();
  const [approxMilk, setApproxMilk] = useState();
  const [salePricePerLitre, setSalePricePerLitre] = useState();
  const [expectedIcome, setExpectedIncome] = useState();
  const [foodExpenseOfCow, setFoodExpenseOfCow] = useState();
  const [savingPerDay, setSavingPerDay] = useState();
  const [savingPerMonth, setSavingPerMonth] = useState();

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [alive, setAlive] = useState();
  const [count, setCount] = useState([]);
  const [study, setStudy] = useState();

  const viewData = async () => {
    try {
      const resp = await axios.get("http://localhost:9000/admin/donor");
      setDonor(resp.data);

      console.log(resp.data, "HELLOsss");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    viewData();
  }, []);

  function handleChange(value) {
    console.log(`selected ${value}`);
    setDonorId(value);
  }

  const postData = async () => {
    const obj = {
      Uid: donorId,
      deserverName,
      cnic,
      cell,
      status,
      family,
      accountNo,
      sourceOfIncome,
      cowPrice,
      cowOwner,
      finalPrice,
      approxMilk,
      salePricePerLitre,
      expectedIcome,
      foodExpenseOfCow,
      savingPerDay,
      savingPerMonth,
    };

    try {
      const res = await axios.post(
        "http://localhost:9000/admin/masjidDonation",
        obj
      );
      console.log(res, "Successfully send");
      alert(`$ \n 
             Your form has been submitted`);
    } catch (ex) {
      alert(`$ \n 
            Your form was not submitted`);
      console.log(ex);
    }
  };

  function AddFamily() {
    setFamily((family) => [
      ...family,
      {
        name: name,
        age: age,
        study: study,
        alive: alive,
      },
    ]);
    setCount(count + 1);
  }

  return (
    <div>
      <Form.Item label="Select Donor">
        <Select
          defaultValue="Select Donor"
          style={{
            width: 180,
            borderRadius: "0px",
            backgroundColor: "transparent",
          }}
          onChange={handleChange}
        >
          {donor.map((item) => {
            return <Option value={item._id}>{item.name}</Option>;
          })}
        </Select>
      </Form.Item>{" "}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Deserver Name: "
          rules={[
            {
              required: true,
              message: "Please enter Deserver Name",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setDeserverName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="CNIC: "
          rules={[
            {
              required: true,
              message: "Please enter CNIC",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setCnic(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Cell: "
          rules={[
            {
              required: true,
              message: "Please enter Cell No",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setCell(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Status / Category: "
          rules={[
            {
              required: true,
              message: "Please enter Status / Category",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              postData();
            }}
          >
            Submit proposal
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
