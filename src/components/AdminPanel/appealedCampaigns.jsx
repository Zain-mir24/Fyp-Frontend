import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
const axios = require("axios");
require("dotenv").config({ debug: process.env.DEBUG });
function AppealedCampaigns() {
  const [campaigndata, setcampaigndata] = useState([]);

  useEffect(() => {
    viewData();
  }, []);
  const viewData = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_CAMPAPPEAL);
      
       setcampaigndata(
        res.data.appeal.map((i) => ({
          key: i._id,
          Cname: i.name,
           bid: i.bid,
           amountneeded:i.amountneeded,
           description:i.description
        }))
      );

      console.log(campaigndata, "campaign");
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
      title: "description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "amountneeded",
      dataIndex: "amountneeded",
      key: "amountneeded",
    },
  ];

  return (
    <div>
     
      <Table columns={columns} dataSource={campaigndata} />
      <button
        onClick={() => {
          viewData();
        }}
      >
        view data
      </button>
    </div>
  );
}

export default AppealedCampaigns;
