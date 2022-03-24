import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "antd";
import Amountmanagment from "./Amountmanagment";
export default function AmountDetail() {
  const [users, setUsers] = useState();
  const [bid, setBid] = useState("");
  const [content, setContent] = useState("");
  var array = [];
  const viewData = async () => {
    try {
      const res = await axios({
        url: "http://localhost:9000/admin/users",
        method: "GET",
      });
      console.log(res.data);
      setUsers(res.data.filter((user) => user.userType == "beneficiary"));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    viewData();
  }, []);
  const columns = [
    {
      title: "beneficiary name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "userType",
      dataIndex: "userType",
      key: "userType",
    },
    {
      title: "More Info",
      render: (text, record) => (
        <div>
          <Button
            onClick={() => {
              setBid(record._id);
              setContent("Detail");
            }}
          >
            Amount donation of this beneficiary
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ZAKAT MANAGEMENT</h1>

      {content == "Detail" ? (
        <Amountmanagment bid={bid} />
      ) : (
        <Table columns={columns} dataSource={users} />
      )}
    </div>
  );
}
