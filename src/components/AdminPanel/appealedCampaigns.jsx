import React, { useEffect, useState } from "react";
import { Table, Tag, Space, Button } from "antd";
import { saveAs } from "file-saver";
const FileDownload = require("js-file-download");
const axios = require("axios");
const Path = require("path");
const Fs = require("fs");

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

  const downloadFile = async (file) => {
    try {
      // const path = Path.resolve(__dirname, "Images", file);
      const res = await axios({
        url: process.env.REACT_APP_CAMPAPPEAL,
        method: "GET",
        responseType: "blob",
      });
      // console.log(res.data.appeal);
      // res.data.appeal.pipe(Fs.createWriteStream(path));
      // return new Promise((resolve,reject)=>{
      //   res.data.on('end',()=>{
      //     resolve()
      //   })
      //   res.data.on('error',(err)=>{
      //     reject(err)
      //   })
      // })

      const url = window.URL.createObjectURL(new Blob([res.data.appeal]));

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", file);
      document.body.appendChild(link);
      link.click();
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
        <Button
          onClick={() => {
            downloadFile(record.file);
          }}
        >
          download {record.file}
        </Button>
      ),
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
