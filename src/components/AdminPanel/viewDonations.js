import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Table, Button, Input, Upload, Col, Form, Select, Row } from "antd";

import { combineReducers } from "@reduxjs/toolkit";
import { UploadOutlined } from "@ant-design/icons";

import { DatePicker, Space } from "antd";
import "./Panel.css";
import axios from "axios";

const { Option } = Select;

function ViewDonation() {
  const [name, setName] = useState();
  const [data, setData] = useState([]);

  const [updateID, setUpdateID] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/Donations");

      await setData(res.data);
      console.log(res.data, "TESTING");
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
    setUpdateID(value);
  }

  useEffect(() => {
    getData();
    // console.log(data, "HELL");
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Donation",
      dataIndex: "Donation",
      key: "Donation",
    },
  ];

  return (
    <div>
      <div className="row" style={{ height: "600px", overflow: "scroll" }}>
        <div style={{ textAlign: "center" }} s>
          <h1 className="heading"> Donations for our campaigns</h1>
          <br />
        </div>
        <div className="col-lg-12">
          {data.map((item) => {
            return (
              <div>
                <h3>Donations for {item.campaignname}</h3>
                <Table
                  columns={columns}
                  dataSource={item?.registeredUser.map((item) => ({
                    Name: item.userId?.name,
                    Email: item.userId?.email,
                    Donation: item?.donation
                  }))}
                />
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default ViewDonation;
