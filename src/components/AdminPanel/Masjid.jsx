import { React, useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Select, Table, DatePicker } from "antd";
import axios from "axios";
const { Option } = Select;
const { TextArea } = Input;

export default function Masjid() {
  const [donor, setDonor] = useState([]);
  const [date, setDate] = useState("");
  const [credited, setCredited] = useState();
  const [debited, setDebited] = useState();
  const [balance, setBalance] = useState();
  const [remarks, setRemarks] = useState();
  const [data, setData] = useState([]);
  const [donorId, setDonorId] = useState();

  const postData = async () => {
    const obj = {
      Uid: donorId,
      Date: date,
      credited: credited,
      debited: debited,
      balance: balance,
      Remarks: remarks,
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

  const viewData = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/masjidDonation");
      const resp = await axios.get("http://localhost:9000/admin/donor");
      setDonor(resp.data);
      setData(res.data);

      console.log(resp.data, "HELLOsss");

      console.log(res.data, "Loans");
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    {
      title: "Date",
      render: (text, record) => {
        return (
          <div>
            <p>{record.Date}</p>
          </div>
        );
      },
    },
    {
      title: "Credited",
      render: (text, record) => {
        return (
          <div>
            <p>{record.credited}</p>
          </div>
        );
      },
    },
    {
      title: "Debited",
      render: (text, record) => {
        return (
          <div>
            <p>{record.debited}</p>
          </div>
        );
      },
    },
    {
      title: "Balance",
      render: (text, record) => {
        return (
          <div>
            <p>{record.balance}</p>
          </div>
        );
      },
    },
    {
      title: "Remarks",
      render: (text, record) => {
        return (
          <div>
            <p>{record.Remarks}</p>
          </div>
        );
      },
    },
  ];

  function handleChange(value) {
    console.log(`selected ${value}`);
    setDonorId(value);
  }

  useEffect(() => {
    viewData();
  }, []);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Masjid Management</h1>
      </div>
      <br />
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
          label="Date: "
          rules={[
            {
              required: true,
              message: "Please enter Date",
            },
          ]}
        >
          <DatePicker
            onChange={(date, dateString) => {
              setDate(dateString);
              console.log(dateString);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Credited: "
          rules={[
            {
              required: true,
              message: "Please enter credit",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setCredited(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Debited: "
          rules={[
            {
              required: true,
              message: "Please enter Debit",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setDebited(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Balance: "
          rules={[
            {
              required: true,
              message: "Please enter Balance",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setBalance(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Remarks: "
          rules={[
            {
              required: true,
              message: "Please enter remarks",
            },
          ]}
        >
          <TextArea
            row={6}
            onChange={(e) => {
              setRemarks(e.target.value);
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
      {data.map((item) => {
        return (
          <div style={{ textAlign: "center" }}>
            <p style={{ fontWeight: "700" }}> Donor: {item.Uid.name}</p>

            <br />
            <Table columns={columns} dataSource={item.Donation} />
          </div>
        );
      })}
    </div>
  );
}
