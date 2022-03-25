import { React, useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Dropdown,
  Menu,
  message,
  Select,
  Upload,
  Col,
  InputNumber,
  DatePicker,
  Space,
  Rate,
  Table,
} from "antd";
import axios from "axios";

export default function ShowDonation(props) {
  const [donor, setDonor] = useState();
  const viewData = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:9000/admin/viewDonorCowDetail/61f51546fb26ff2e7007547d"
      );
      setDonor(resp.data);

      console.log(resp.data, "HELLOsss");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    viewData();
  }, []);

  const columns = [
    {
      title: "Donated Amount",
      render: (text, record) => {
        return (
          <div>
            <p>{record.donatedAmount}</p>
          </div>
        );
      },
    },
    {
      title: "Deserver Name",
      render: (text, record) => {
        return (
          <div>
            <p>{record.deserverName}</p>
          </div>
        );
      },
    },
    {
      title: "Cell",
      render: (text, record) => {
        return (
          <div>
            <p>{record.cell}</p>
          </div>
        );
      },
    },
    {
      title: "Cow Price",
      render: (text, record) => {
        return (
          <div>
            <p>{record.cowPrice}</p>
          </div>
        );
      },
    },
    {
      title: "Saving Per Month",
      render: (text, record) => {
        return (
          <div>
            <p>{record.savingPerMonth}</p>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={donor} />
    </div>
  );
}
