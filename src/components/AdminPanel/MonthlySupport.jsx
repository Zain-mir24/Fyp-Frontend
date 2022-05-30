import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";

import { Select } from "antd";
import MonthlySupportDetail from "./MonthlySupportDetail";
import axios from "axios";
import url from "../../config/axios";

const { Option } = Select;

export default function MonthlySupport() {
  const [Loans, SetLoans] = useState([]);
  const [id, setID] = useState();
  const [content, setContent] = useState("table");
  const [data, setData] = useState([]);
  useEffect(() => {
    viewData();
    console.log(Loans);
  }, []);
  const viewData = async () => {
    try {
      const res = await url.get("/admin/viewmonthlyAppeal");
      console.log(res, "response of monthly")
      SetLoans(
        // res.data.map((i) => ({
        //   name: i.bid.name,
        //   phone: i.phoneNumber,
        //   cnic: i.cnic,
        //   category: i.category,
        //   sourceOfIncome: i.Sourceofincome,
        //   NativeTown: i.NativeTown,
        //   medicineCost: 123,
        //   bformname: i.bformname,
        //   address: i.presentAddress,
        //   income: i.Totalincome,
        //   expenses: i.Totalexpenses,

        // }
        // ))
        res.data
      );

      console.log(res.data, "Loan");
    } catch (e) {
      console.log(e);
    }
  };
  const columns = [
    {
      title: "beneficiary name",
      render: (text, record) => {
        return (
          <div>
            <p>{record.bid.name}</p>
          </div>
        );
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
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
              console.log(record, "YEAH");
              setContent("Detail");
              setData(record);
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
        <div>
          <h1> Monthly support Appeal from beneficiary</h1>
          <Table columns={columns} dataSource={Loans} />
        </div>
      ) : (
        <MonthlySupportDetail data={data} />
      )}
    </div>
  );
}
