import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";

const axios = require("axios");

require("dotenv").config({ debug: process.env.DEBUG });

function AppealedLoans() {
  const [Loans, SetLoans] = useState([]);
  useEffect(() => {
    viewData();
  }, []);
  const viewData = async () => {
    try {
      const res = await axios({
        url: "https://damp-stream-39096.herokuapp.com/admin/viewLoanAppeals",
        method: "GET",
        responseType: "stream",
      });

      SetLoans(
        res.data.appeal.map((i) => ({
          key: i._id,
          Cname: i.name,
          bid: i.bid,
          amountneeded: i.Loanamount,
          description: i.loandescription,
          loanType: i.loanType,
          file: i.file,
        }))
      );

      console.log(res.data, "Loan");
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    {
      title: "LoanId",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "beneficiaryid",
      dataIndex: "bid",
      key: "bid",
    },
    {
      title: "Loan requested",
      dataIndex: "amountneeded",
      key: "amountneeded",
    },
    {
      title: "description",
      dataIndex: "description",
      key: "desciption",
    },
    {
      title: "LoanType",
      dataIndex: "loanType",
      key: "loanType",
    },
    {
      title: "Download File",
      dataIndex: "file",
      key: "file",
      render: (text, record) => (
        <a
          href={
            "https://damp-stream-39096.herokuapp.com/uploads/" + record.file
          }
          download
        >
          <Button> {record.file}</Button>
        </a>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={Loans} />
    </div>
  );
}

export default AppealedLoans;
