import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";

const axios = require("axios");

require("dotenv").config({ debug: process.env.DEBUG });

function AppealedLoans() {
  const [Loans, SetLoans] = useState([]);
  useEffect(() => {
    viewData();
    console.log(Loans)
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
          key: i._id,
          Cname: i.name,
          bid: i.bid._id,
          amountneeded: i.Loanamount,
          description: i.loandescription,
          loanType: i.loanType,
          file: i.file,
          isApproved:i.isApproved.toString()
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
          <Button style={{width:"100%",wordWrap:"break-word",whiteSpace:"normal",height:"100%"}}>
          
             {record.file}
            
             </Button>
        </a>
      ),
    },{
      title: "approval Status",
      dataIndex: "isApproved",
      key: "isApproved"
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={Loans} />
    </div>
  );
}

export default AppealedLoans;
