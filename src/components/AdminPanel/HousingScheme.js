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
  const [id, setId] = useState();
  const [ProposalNo, setProposalNo] = useState();
  const [Deservername, setDeservername] = useState("");
  const [Guardian, setGuardian] = useState("");
  const [Status, setStatus] = useState("");
  const [cnic, setcnic] = useState(0);
  const [cell, setcell] = useState(0);
  const [Dependents, setDependents] = useState("");
  const [Sourceofincome, setSourceofincome] = useState("");
  const [Monthlyincome, setMonthlyincome] = useState(0);
  const [address, setaddress] = useState("");
  const [accomodationself, setaccomodationself] = useState("");
  const [accomodationdonated, setaccomodationdonated] = useState("");
  const [accomodationrental, setaccomodationrental] = useState("");
  const [accomodationrent, setaccomodationrent] = useState("");
  const [ownerofland, setownerofland] = useState("");
  const [PlotDimensions, setPlotDimensions] = useState("");
  const [EstimatedCost, setEstimatedCost] = useState(0);
  const [EstimatedTimeFrame, setEstimatedTimeFrame] = useState("");
  const [contructionDetail, setcontructionDetail] = useState("");
  const [family, setFamily] = useState([]);
  const [plan, setplan] = useState("");
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
      title: "ProposalNo",
      dataIndex: "ProposalNo",
      key: "ProposalNo",
    },

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
              setDeservername(record.Deservername);
              setGuardian(record.Guardian);
              setSourceofincome(record.Sourceofincome);
              setEstimatedCost(record.EstimatedCost);
              setEstimatedTimeFrame(record.EstimatedTimeFrame);
              setContent("View");
              setId(record._id);
              setaddress(record.address);
              setFamily(record.family);
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
        <HousingSchemePDF
          name={Deservername}
          guardian={Guardian}
          SOI={Sourceofincome}
          EC={EstimatedCost}
          ETF={EstimatedTimeFrame}
          cnic={cnic}
          id={id}
          address={address}
          family={family}
        />
      )}
    </div>
  );
}

export default HousingScheme;
