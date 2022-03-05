import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";

import { Select } from "antd";
import MonthlySupportDetail from "./MonthlySupportDetail";
import axios from "axios";
const { Option } = Select;

export default function MonthlySupport() {
  const [Loans, SetLoans] = useState([]);
  const [id, setID] = useState();
  const [content, setContent] = useState("table");
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
          name: i.bid.name,
          phone: i.phoneNumber,
          cnic: i.cnic,
          category: i.category,
          sourceOfIncome: i.Sourceofincome,
          NativeTown: i.NativeTown,
          medicineCost: 123,
          bformname: i.bformname,
        }))
      );

      console.log(res.data, "Loan");
    } catch (e) {
      console.log(e);
    }
  };
  const columns = [
    {
      title: "beneficiary name",
      dataIndex: "name",
      key: "name",
    }, {
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
          <a
            onClick={() => {
              setContent("Detail");
            }}
          >
            View Detail
          </a>
        </div>
      ),
    },
  ];
  return (
    <div>
      {content == "table" ? (
        <Table columns={columns} dataSource={Loans} />
      ) : (
        <MonthlySupportDetail data={Loans} />
      )}
    </div>
  );
}
