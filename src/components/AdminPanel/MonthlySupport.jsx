import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";

import { Select } from "antd";
import MonthlySupportDetail from "./MonthlySupportDetail";
import axios from "axios";
const { Option } = Select;

export default function MonthlySupport() {
  const [Loans, SetLoans] = useState([]);
  const [content, setContent] = useState("");
  const [id, setID] = useState();
  useEffect(() => {
    viewData();
    console.log(Loans);
  }, []);
  const viewData = async () => {
    try {
      const res = await axios({
        url: "http://localhost:9000/admin/viewmonthlyAppeal",
        method: "GET",
        responseType: "stream",
      });

      SetLoans(
        res.data.map((i) => ({
          phone: i.phoneNumber,
          cnic: i.cnic,
          category: i.category,
          sourceOfIncome: i.Sourceofincome,
          NativeTown: i.NativeTown,
        }))
      );

      console.log(res.data, "Loan");
    } catch (e) {
      console.log(e);
    }
  };
  const columns = [
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "CNIC",
      dataIndex: "cnic",
      key: "cnic",
    },
    {
      title: "Cateogry",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Native Town",
      dataIndex: "NativeTown",
      key: "NativeTown",
    },
    {
      title: "More Info",
      render: (text, record) => (
        <div>
          <button onClick={() => {}}>View Detail</button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={Loans} />
    </div>
  );
}
