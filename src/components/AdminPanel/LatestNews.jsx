import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Table, Button, Input, Upload, Col, Form, Select } from "antd";
import { combineReducers } from "@reduxjs/toolkit";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;
const axios = require("axios");
function Neews() {
  const [getApi, setApi] = useState([]);
  const [name, setName] = useState();
  const [description, setdesc] = useState();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [assignCategory, setAssignCategory] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const postData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("category", assignCategory);
    try {
      const res = await axios.post(
        "http://localhost:9000/admin/addNews",
        formData
      );
      alert(`News has been Created`);
      console.log(res);
    } catch (ex) {
      alert(`News not Created`);

      console.log(ex);
    }
  };

  const postCategory = async () => {
    const formData = new FormData();
    formData.append("name", name);
    try {
      console.log(formData, "TESTING");
      const res = await axios.post("http://localhost:9000/admin/addcategory", {
        name: category,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const getCategory = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/sendcategory");
      await setCategoryData(res.data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
    setAssignCategory(value);
  }

  const deleteCategory = async (id) => {
    try {
      const res = axios.delete(
        "http://localhost:9000/admin/deletecategory/" + id
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(getCategory, []);

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
      title: "Action",
      key: "action",
      render: (text, record) => (
        <button
          onClick={() => {
            deleteCategory(record._id);
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  const value = categoryData.map((item) => ({
    _id: item._id,
    Title: item.name,
  }));

  return (
    <div className="row">
      <div className="col-lg-6">
        <Form>
          <p>Add News</p>
          <Form.Item
            rules={[{ required: true, message: "Please Enter campaign name" }]}
          >
            <Col span={15}>
              <Input
                required
                placeholder="Campaign name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Col>
          </Form.Item>
          <Col span={15}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please Enter campaign Description",
                },
              ]}
            >
              <Input.TextArea
                required
                placeholder="Campaign Description"
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
                showCount
                maxLength={1000}
              />
            </Form.Item>
          </Col>
          <Col span={15}>
            <Form.Item
              rules={[{ required: true, message: "Please uplaod doc" }]}
              onChange={saveFile}
            >
              <Upload>
                <Button icon={<UploadOutlined />}>Upload media files</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={15}>
            <Form.Item>
              <Select
                defaultValue="Select Category"
                style={{
                  width: 180,
                  borderRadius: "0px",
                  backgroundColor: "transparent",
                }}
                onChange={handleChange}
              >
                {categoryData.map((item) => {
                  return <Option value={item._id}>{item.name}</Option>;
                })}
              </Select>
            </Form.Item>
          </Col>

          <Col span={15}>
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={postData}>
                submit
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </div>
      <div className="col-lg-6">
        <h3>Category</h3>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Category"
          name="name"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <button onClick={postCategory}>submit</button>
        <Table columns={columns} dataSource={value} />
      </div>
    </div>
  );
}

function AdminCampaign() {
  const [data, setData] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  // const [categoryy, setcategoryy] = useState("");
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://damp-stream-39096.herokuapp.com/admin/latestnews"
      );
      setData(res.data);
      console.log(res.data, "TESTING");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(
        "https://damp-stream-39096.herokuapp.com/admin/deleteNews/" + id
      );
      alert("Campaign Deleted");

      console.log(res);
    } catch (e) {
      alert("campaign not deleted");
      console.log(e);
    }
  };

  async function singleCategory(id) {
    // try{
    //   const res = await  axios.get("http://localhost:9000/admin/sendcategory/"+id);
    //   console.log(res.data.name,"HELLOOOOO")
    //   return await res.data.name
    // }
    // catch(e){
    //   console.log(e);
    // }
    axios
      .get("https://damp-stream-39096.herokuapp.com/admin/sendcategory/" + id)
      .then((res) => {
        console.log(res.data.name, "HELLOOOOO");
        return res.data.name;
      });
  }

  useEffect(() => {
    getData();
  }, []);
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
      title: "Category",
      dataIndex: "Category",
      key: "Category",
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
    Category: item.category,
  }));

  console.log(
    data.map(async (item) => ({
      _id: item._id,
      Title: item.name,
      Description: item.description,
      Category: item.category,
    })),
    "YEST"
  );

  return (
    <div>
      <Neews />
      <br />
      <div className="LatestNews-render">
        <Table columns={columns} dataSource={value} />
      </div>
    </div>
  );
}

export default AdminCampaign;
