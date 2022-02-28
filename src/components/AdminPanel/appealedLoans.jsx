import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { Select } from "antd";

const { Option } = Select;
const defaultStatus = ["Approve", "Reject", "Pending"];

const axios = require("axios");

require("dotenv").config({ debug: process.env.DEBUG });

function AppealedLoans() {
  const [Loans, SetLoans] = useState([]);
  const [id, setID] = useState();
  useEffect(() => {
    viewData();
    console.log(Loans);
  }, []);
  const viewData = async () => {
    try {
      const res = await axios({
        url: "http://localhost:9000/admin/viewLoanAppeals",
        method: "GET",
        responseType: "stream",
      });

      SetLoans(
        res.data.map((i) => ({
          status: i.status,
          key: i._id,
          Cname: i.name,
          bname: i.bid.name,
          amountneeded: i.Loanamount,
          description: i.loandescription,
          loanType: i.loanType,
          file: i.file,
          isApproved: i.isApproved.toString(),
        }))
      );

      console.log(res.data, "Loan");
    } catch (e) {
      console.log(e);
    }
  };

  const handleStatusChange = async (value, id) => {
    const update = await axios.patch(
      "http://localhost:9000/admin/updateLoan/" + id,
      { status: value },
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
        }
      }
    );
  };

  const columns = [
    {
      title: "beneficiary name",
      dataIndex: "bname",
      key: "bname",
    },
    {
      title: "Loan requested",
      dataIndex: "amountneeded",
      key: "amountneeded",
      width: "30%",
    },

    {
      title: "description",
      dataIndex: "description",
      key: "desciption",
      width: "30%",
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
          <Button
            style={{
              width: "100%",
              wordWrap: "break-word",
              whiteSpace: "normal",
              height: "100%",
            }}
          >
            {record.file}
          </Button>
        </a>
      ),
    },
    {
      title: "approval Status",
      dataIndex: "isApproved",
      key: "isApproved",
    },
    {
      title: "approve",
      render: (text, record) => (
        <Select
          defaultValue={record.status}
          style={{ width: 120 }}
          onChange={(e) => handleStatusChange(e, record.key)}
        >
          {defaultStatus.map((province) => (
            <Option key={province}>{province}</Option>
          ))}
        </Select>
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
