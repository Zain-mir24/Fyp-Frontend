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
import url from "../../../config/axios"
const axios = require("axios");

export default function Amountmanagement(props) {
  console.log(props.bid);
  const [data, setData] = useState([]);
  const viewData = async () => {
    try {
      const res = await url.get(
        "/admin/viewamountDetail/" + props.bid
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
        <h1>previous record</h1>
        <Table
          scroll={{ x: 1500 }}
          columns={columns}
          dataSource={data.LoanDetail}
        />
      </div>
    </div>
  );
}
