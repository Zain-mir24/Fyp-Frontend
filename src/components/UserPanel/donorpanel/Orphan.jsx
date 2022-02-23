import React, { useEffect, useState } from "react";
import { Table, Button, Input, Upload, Col, Form } from "antd";
import axios from "axios";
export default function Orphan() {
   const [Maindata, setMaindata] = useState();
  const renderChildrenData = async () => {
    await axios
      .request({
        baseURL: "http://localhost:9000/User",
        url: "/viewChildren",
        method: "get",
      })
      .then((res) => {
        console.log(res.data)
        setMaindata(
          res.data.map((i) => ({
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
      key:"fileName",
      render: (text, record) => {
        return (
          <div>
            <img src={"http://localhost:9000/uploads/" + record} style={{ height: '20%',width:'100%' }} />
          </div>
        );
      },
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
      render: (text, record) => <button>Adopt</button>,
    },
  ];
  return (
    <div>
      <h1>Childs up for adoption</h1>
      <Table
        title={() => "Children up for adoption"}
        dataSource={Maindata}
        columns={columns}
      />
    </div>
  );
}
