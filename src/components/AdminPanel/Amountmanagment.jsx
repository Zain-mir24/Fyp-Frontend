import React, { useState } from "react";
import {
  Table,
  Button,
  Input,
  Upload,
  Col,
  Form,
  Select,
  Row,
  DatePicker,
} from "antd";
import { useEffect } from "react";
const axios = require("axios");

export default function Amountmanagment(props) {
  const [bid, setBid] = useState(props.bid);
  const [date, setDate] = useState("");
  const [pounds, setPounds] = useState(0);
  const [poundRate, setRate] = useState(0);
  const [rupees, setRupees] = useState(0);
  const [donationDate, setDonationDate] = useState("");
  const [donationMade, setDonation] = useState(0);
  const [balance, setBalance] = useState("");
  const [Sod, setSOD] = useState("");
  // useState for view route
  const [data, setData] = useState([]);
  function onChange(date, dateString) {
    console.log(dateString);
    setDate(dateString);
  }
  function onChange1(date, dateString) {
    console.log(dateString);
    setDonationDate(dateString);
  }

  const sendData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:9000/admin/addAmountDetail/" + bid,
        {
          bid: bid,
          Date: date,
          AmountReceivedpound: pounds,
          Rate: poundRate,
          AmountRecievedpkr: rupees,
          amountsentDate: donationDate,
          giventobeneficiary: donationMade,
          Balance: balance,
          Sourcedelivery: Sod,
        }
      );
      if (!res) {
        console.log("data didnt send");
      }
      alert("amount detail added, refresh the page to see changes");
    } catch (e) {
      alert("couldnt add the amount detail");
      console.log(e);
    }
  };

  const viewData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/admin/viewamountDetail/" + bid
      );
      setData(res.data);

      console.log(res.data, "view for amount detail");
    } catch (err) {
      console.log(err);
    }
  };
  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },

    {
      title: "Pounds",
      dataIndex: "AmountReceivedpound",
      key: "AmountReceivedpound",
    },
    {
      title: "Rate",
      dataIndex: "Rate",
      key: "Rate",
    },
    {
      title: "In Rupees",
      dataIndex: "AmountRecievedpkr",
      key: "AmountRecievedpkr",
    },
    {
      title: "Date",
      dataIndex: "amountsentDate",
      key: "amountsentDate",
    },

    {
      title: "Amount to deserver",
      dataIndex: "giventobeneficiary",
      key: "giventobeneficiary",
    },
    {
      title: "Balance",
      dataIndex: "Balance",
      key: "Balance",
    },
    {
      title: "Source of delivery",
      dataIndex: "Sourcedelivery",
      key: "Sourcedelivery",
    },
  ];
  useEffect(() => {
    viewData();
  }, []);
  return (
    <div className="row">
      <div className="col-lg-12">
        <Row>
          <Col span={12}>
            {/* <h3>Add amountDetail for this beneficiary</h3> */}
            <Form>
              <Form.Item
                rules={[{ required: true, message: "Please Enter Date" }]}
              >
                Date when the amount was recieved
                <DatePicker onChange={onChange} />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Enter amount recieved in pounds",
                  },
                ]}
              >
                <Input
                  required
                  placeholder="Amount recieved in pounds"
                  onChange={(e) => {
                    setPounds(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: "Please Enter pound rate" }]}
              >
                <Input
                  required
                  placeholder="Rate of pound"
                  onChange={(e) => {
                    setRate(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
                rules={[
                  { required: true, message: "Please Enter amount in rs" },
                ]}
              >
                <Input
                  required
                  placeholder="Amount in rs"
                  onChange={(e) => {
                    setRupees(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: "Please Enter Date" }]}
              >
                Date when the amount was given to beneficiary
                <DatePicker onChange={onChange1} />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Enter how much was given to deserver",
                  },
                ]}
              >
                <Input
                  required
                  placeholder="Amount donated to deserver"
                  onChange={(e) => {
                    setDonation(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: "Please Enter Balance" }]}
              >
                <Input
                  required
                  placeholder="Balance"
                  onChange={(e) => {
                    setBalance(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Enter source of delivery",
                  },
                ]}
              >
                <Input
                  required
                  placeholder="Source of delivery"
                  onChange={(e) => {
                    setSOD(e.target.value);
                  }}
                />
              </Form.Item>
              <Button type="primary" onClick={sendData}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
      <div className="col-lg-12">
        <h1>previous record</h1>
        <Table
          scroll={{ x: 1500 }}
          columns={columns}
          dataSource={data.LoanDetail}
        // dataSource={data.map((item) => ({
        //   Date: item.LoanDetail.Date,
        //   AmountReceivedpound: item.LoanDetail.AmountReceivedpound,
        //   Rate: item.LoanDetail.Rate,
        //   AmountRecievedpkr: item.LoanDetail.AmountRecievedpkr,
        //   amountsentDate: item.LoanDetail.amountsendDate,
        //   giventobeneficiary: item.LoanDetail.giventobeneficiary,
        //   Balance: item.LoanDetail.Balance,
        //   sourcedelivery: item.LoanDetail.sourcedelivery,
        // }))}
        />
      </div>
    </div>
  );
}
