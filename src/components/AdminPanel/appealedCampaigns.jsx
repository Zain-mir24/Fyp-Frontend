import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";

const axios = require("axios");

require("dotenv").config({ debug: process.env.DEBUG });
function AppealedCampaigns() {
  const [campaigndata, setcampaigndata] = useState([]);

  useEffect(() => {
    viewData();
  }, []);
  const viewData = async () => {
    try {
      const res = await axios({
        url: process.env.REACT_APP_CAMPAPPEAL,
        method: "GET",
        responseType: "stream",
      });

      setcampaigndata(
        res.data.appeal.map((i) => ({
          key: i._id,
          Cname: i.name,
          bid: i.bid,
          amountneeded: i.amountneeded,
          description: i.description,
          file: i.file,
        }))
      );

      console.log(res, "campaign");
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    {
      title: "Campaign title",
      dataIndex: "Cname",
      key: "name",
    },
    {
      title: "beneficiaryid",
      dataIndex: "bid",
      key: "bid",
    },
    {
      title: "Header",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "amountneeded(PKR)",
      dataIndex: "amountneeded",
      key: "amountneeded",
    },
    {
      title: "File",
      dataIndex: "file",
      key: "file",
      render: (text, record) => (
        <a href={"http://localhost:9000/uploads/" + record.file} download>
          <Button>Download {record.file}</Button>
        </a>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={campaigndata} />
    </div>
  );
}

export default AppealedCampaigns;
