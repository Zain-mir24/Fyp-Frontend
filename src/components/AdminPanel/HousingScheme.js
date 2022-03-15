import React, { useState } from "react";
import {
  Table,
  Button,
  // Input,
  // Upload,
  // Col,
  // Form,
  // Select,
  // Row,
  // DatePicker,
} from "antd";
import { useEffect } from "react";
import HousingSchemePDF from "./HousingSchemePDF";
const axios = require("axios");
function HousingScheme() {
  const [record, setRecord] = useState();

  // useState for view route
  const [data, setData] = useState();
  const [content, setContent] = useState("Scheme");

  const viewData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/admin/viewhousingscheme"
      );
      setData(res.data);

      console.log(res.data, "view for amount detail");
    } catch (err) {
      console.log(err);
    }
  };
  const columns = [
    {
      title: "Deservername",
      dataIndex: "Deservername",
      key: "Deservername",
    },
    {
      title: "Guardian",
      dataIndex: "Guardian",
      key: "Guardian",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
    {
      title: "cnic",
      dataIndex: "cnic",
      key: "cnic",
    },

    {
      title: "cell",
      dataIndex: "cell",
      key: "cell",
    },
    {
      title: "Dependents",
      dataIndex: "Dependents",
      key: "Dependents",
    },
    {
      title: "Sourceofincome",
      dataIndex: "Sourceofincome",
      key: "Sourceofincome",
    },
    {
      title: "Monthlyincome",
      dataIndex: "Monthlyincome",
      key: "Monthlyincome",
    },
    {
      title: "address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "accomodationself",
      dataIndex: "accomodationself",
      key: "accomodationself",
    },
    {
      title: "accomodationdonated",
      dataIndex: "accomodationdonated",
      key: "accomodationdonated",
    },
    {
      title: "accomodationrental",
      dataIndex: "accomodationrental",
      key: "accomodationrental",
    },
    {
      title: "accomodationrent",
      dataIndex: "accomodationrent",
      key: "accomodationrent",
    },
    {
      title: "ownerofland",
      dataIndex: "ownerofland",
      key: "ownerofland",
    },
    {
      title: "EstimatedCost",
      dataIndex: "EstimatedCost",
      key: "EstimatedCost",
    },
    {
      title: "EstimatedTimeFrame",
      dataIndex: "EstimatedTimeFrame",
      key: "EstimatedTimeFrame",
    },
    {
      title: "Edit Form",
      render: (text, record) => (
        <div>
          <Button
            onClick={() => {
              setContent("View");
              setRecord(record);
            }}
          >
            GeneratePDf
          </Button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    viewData();
  }, []);

  return (
    <div className="row">
      {content == "Scheme" ? (
        // <h1>
        // Housing Scheme</h1>
        <>
          <h1> Housing Scheme</h1>
          <div className="col-lg-12"></div>
          <div className="col-lg-12">
            <Table scroll={{ x: 1500 }} columns={columns} dataSource={data} />
          </div>
        </>
      ) : (
        <HousingSchemePDF data={record} />
      )}
    </div>
  );
}

export default HousingScheme;
