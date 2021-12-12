import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Table, Button, Input, Upload, Col, Form} from "antd";
import { UploadOutlined } from "@ant-design/icons";
const axios = require("axios");
function Foorm() {
  const [camp, setCamp] = useState([]);
  const [name, setName] = useState("");
  const [description, setdesc] = useState("");
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  useEffect(() => {
    viewCamp();
  }, []);
  const postData = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("fileName", fileName);

    try {
      const res = await axios.post(
        "http://localhost:9000/admin/addCampaign",
        formData
      );
      if (!res) {
        return console.log("couldnt add");
      }
      alert(`Campaign has been added`);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };
  const viewCamp = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/viewCampaigns");
      console.log(res, "Response from the backend");
      setCamp(
        res.data.map((i) => ({
          _id: i._id,
          name: i.name,
          description:i.description
        }))
      );
    } catch (e) {
      console.log(e);
    }
  };

  const deleteCamp = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:9000/admin/Deletecampaign/" + id
      );
      console.log(res, "Response from the backend");
      if (!res) {
        throw new Error("The campaign doesnt exist");
      }
      alert(`Campaign has been deleted`);
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    {
      title: "_id",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Title",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <button
          onClick={() => {
            deleteCamp(record._id);
          }}
        >
          Delete
        </button>
      ),
    },
  ];
  
  const column2 = [
    {
      title: "_id",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Title",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      
    },
  ];

  return (
    <div className="row">
      <h1> Campaign managment </ h1>
    <div className="col-lg-6">
        
        <Form      
         ><p>
         Add campaign
         </p>
          <Form.Item  rules={[{ required: true, message: "Please Enter campaign name" }]}>
            <Col span={10}>
              <Input
                required
                placeholder="Campaign name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Col>
          </Form.Item>
          <Col span={10}>
          <Form.Item
          rules={[{ required: true, message: "Please Enter campaign Description" }]}>
            <Input.TextArea
              required
              placeholder="Campaign Description"
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />
          </Form.Item>
          </Col>
          <Col span={10}>
          <Form.Item
          rules={[{ required: true, message: "Please uplaod doc" }]}
          onChange={saveFile}
          >
            <Upload>
              <Button icon={<UploadOutlined />}>Upload media files</Button>
            </Upload>
          </Form.Item>
          </Col>
          <Col span={10}>
          <Form.Item>
          <Button type="primary" htmlType="submit"  onClick={postData}>submit</Button>
          </Form.Item>
          </Col>
        </Form>
        </div>
      <div className="col-lg-6">
        <Table
          title={() => " Delete campaigns"}
          columns={columns}
          dataSource={camp}
        />
      </div>
      <div className="col-lg-12">
        <Table
          title={() => " All campaigns"}
          columns={column2}
          dataSource={camp}
        />
      </div>
    </div>
  );
}

export default Foorm;
