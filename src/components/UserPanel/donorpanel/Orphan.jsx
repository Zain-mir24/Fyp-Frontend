import React, { useEffect, useState } from "react";
import { Table, Button, Input, Upload, Col, Form } from "antd";
import axios from "axios";
import AppointmentApp from "./AppointmentApp";
export default function Orphan() {
  const [Content, setContent] = useState("");
  const [name, setName] = useState("")
  const [childId, setId] = useState("")

  const [Maindata, setMaindata] = useState();
  const renderChildrenData = async () => {
    await axios
      .request({
        baseURL: "http://localhost:9000/User",
        url: "/viewChildren",
        method: "get",
      })
      .then((res) => {
        console.log(res.data[0].fileName)
        setMaindata(
          res.data.map((i) => ({
            _id: i._id,
            name: i.name,
            fileName: i.fileName,
            gender: i.gender,
            disability: i.disability,
            age: i.age,
          }))
        );

      });
  };
  useEffect(() => {
    renderChildrenData();
  }, []);

  const columns = [
    {
      title: "Picture",
      dataIndex: "fileName",
      key: "fileName",
      render: (text, record) => {
        console.log(record)
        return (
          <div style={{ width: "40%" }}>
            <img src={"http://localhost:9000/uploads/" + record.fileName} style={{ height: '20%', width: '100%' }} />
          </div>
        );
      },
      width: '30%',
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => <button onClick={() => {
        setId(text._id)
        setName(text.name)
        setContent("vieworphan")
      }}>Adopt</button>,
    },
  ];
  return (
    <div>
      <h1>Children up for adoption</h1>
      {Content == "vieworphan" ? <AppointmentApp name={name} id={childId} /> : <Table
        title={() => "Children up for adoption"}
        dataSource={Maindata}
        columns={columns}
      />}

    </div>
  );
}
