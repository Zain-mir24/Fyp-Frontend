import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
const axios = require("axios");
function Form() {
  const [getApi, setApi] = useState([]);
  const [name, setName] = useState();
  const [description, setdesc] = useState();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const postData = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "http://localhost:9000/admin/addNews",
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Campaign header"
          name="Campaign header"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="description"
          name="description"
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <TextField
          type="file"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={saveFile}
        />
        <button onClick={postData}>submit</button>
      </form>
    </div>
  );
}

function AdminCampaign() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/latestnews");
      setData(res.data);
      console.log(data, "TESTING");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:9000/admin/deleteNews/" + id
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(getData, []);
  const columns = [
    {
      title: "_id",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Title",
      dataIndex: "Title",
      key: "Title",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <button
          onClick={() => {
            deleteData(record._id);
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  const value = data.map((item) => ({
    _id: item._id,
    Title: item.name,
    Description: item.description,
  }));
  // {
  //   key: "1",
  //   name: "John Brown",
  //   age: 32,
  //   address: "New York No. 1 Lake Park",
  //   tags: ["nice", "developer"],
  // },
  // {
  //   key: "2",
  //   name: "Jim Green",
  //   age: 42,
  //   address: "London No. 1 Lake Park",
  //   tags: ["loser"],
  // },
  // {
  //   key: "3",
  //   name: "Joe Black",
  //   age: 32,
  //   address: "Sidney No. 1 Lake Park",
  //   tags: ["cool", "teacher"],
  // },

  return (
    <div>
      <Form />
      <br />
      <div className="LatestNews-render">
        <Table columns={columns} dataSource={value} />
      </div>
    </div>
  );
}

export default AdminCampaign;
