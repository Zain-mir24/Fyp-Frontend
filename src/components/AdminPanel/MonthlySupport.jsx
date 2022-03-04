import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { Select } from "antd";
import axios from "axios";
const { Option } = Select;
export default function MonthlySupport() {
  const [Loans, SetLoans] = useState([]);
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
          status: i.bid,
          key: i.bid,
          Cname: i.bid.name,
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
  return <div>MonthlySupport</div>;
}
