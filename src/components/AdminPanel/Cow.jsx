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
  const [family, setFamily] = useState([]);
  const [accountNo, setAccountNo] = useState();
  const [sourceOfIncome, setSourceOfIncome] = useState();
  const [cowPrice, setCowPrice] = useState();
  const [cowOwner, setCowOwner] = useState();
  const [finalPrice, setFinalPrice] = useState();
  const [approxMilk, setApproxMilk] = useState();
  const [salePricePerLitre, setSalePricePerLitre] = useState();
  const [expectedIncome, setExpectedIncome] = useState();
  const [foodExpenseOfCow, setFoodExpenseOfCow] = useState();
  const [savingPerDay, setSavingPerDay] = useState();
  const [savingPerMonth, setSavingPerMonth] = useState();

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [alive, setAlive] = useState();
  const [count, setCount] = useState(0);
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
  const viewAI = async () => {
    try {
      const resp = await axios.get("http://localhost:5000");
      console.log(resp);

      console.log(resp.data, "HELLOsss");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    viewData();
    viewAI();
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
      expectedIncome,
      foodExpenseOfCow,
      savingPerDay,
      savingPerMonth,
      donatedAmount,
    };

    try {
      console.log(obj);
      const res = await axios.post(
        "http://localhost:9000/admin/addCowDetail",
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
          label="Donor Donated Amount: "
          rules={[
            {
              required: true,
              message: "Please enter Donor Donated Amount",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setDonatedAmount(e.target.value);
            }}
          />
        </Form.Item>
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
        <h4>Family Member</h4>
        <div style={{ textAlign: "right" }}>
          <p>{count} Family Member Added</p>
        </div>
        <br />
        <Form.Item
          label="Name: "
          rules={[
            {
              required: true,
              message: "Please enter Family Name",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Age: "
          rules={[
            {
              required: true,
              message: "Please enter Age",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Study: "
          rules={[
            {
              required: true,
              message: "Please enter Study",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setStudy(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Alive: "
          rules={[
            {
              required: true,
              message: "Please enter Alive",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setAlive(e.target.value);
            }}
          />
        </Form.Item>
        <br />
        <div style={{ textAlign: "right" }}>
          <button onClick={AddFamily}>Add</button>
        </div>
        <br /> <br />
        <Form.Item
          label="AccountNo: "
          rules={[
            {
              required: true,
              message: "Please enter AccountNo",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setAccountNo(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Source Of Income: "
          rules={[
            {
              required: true,
              message: "Please enter Source Of Income",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setSourceOfIncome(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Cow Price: "
          rules={[
            {
              required: true,
              message: "Please enter Cow Price",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setCowPrice(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Cow Owner: "
          rules={[
            {
              required: true,
              message: "Please enter Cow Owner",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setCowOwner(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Final Price: "
          rules={[
            {
              required: true,
              message: "Please enter Final Price",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setFinalPrice(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Expected Income: "
          rules={[
            {
              required: true,
              message: "Please enter Expected Income",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setExpectedIncome(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Approx Milk: "
          rules={[
            {
              required: true,
              message: "Please enter Approx Milk",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setApproxMilk(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="SalePricePerLitre: "
          rules={[
            {
              required: true,
              message: "Please enter Sale Price per Litre",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setSalePricePerLitre(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Food Expense Of Cow: "
          rules={[
            {
              required: true,
              message: "Please enter Food Expense Of Cow",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setFoodExpenseOfCow(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Saving Per Day: "
          rules={[
            {
              required: true,
              message: "Please enter Saving Per Day",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setSavingPerDay(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Saving Per Month: "
          rules={[
            {
              required: true,
              message: "Please enter Saving Per Month",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setSavingPerMonth(e.target.value);
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
