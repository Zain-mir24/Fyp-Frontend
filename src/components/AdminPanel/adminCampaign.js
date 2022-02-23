import React, { useEffect, useState } from "react";
import { Table, Button, Input, Upload, Col, Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { selectUser } from "../../store/reducers/User";
import { useSelector } from "react-redux";

const axios = require("axios");
function Foorm() {
  const [camp, setCamp] = useState([]);
  const [name, setName] = useState("");
  const [description, setdesc] = useState("");
  const [donation, setDonation] = useState(0);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [ID, setId] = useState("");
  const user = useSelector(selectUser);
  console.log(user.verifToken);
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
    formData.append("donation", donation);
    formData.append("file", file);
    formData.append("fileName", fileName);

    try {
      const res = await axios.post(
        "http://localhost:9000/admin/addCampaign",
         formData ,
        {
          headers: { Authorization: `Bearer ${user.verifToken}` },
        }
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
      const res = await axios.get(
        "https://damp-stream-39096.herokuapp.com/admin/viewCampaigns"
      );
      console.log(res);
      setCamp(
        res.data.map((i) => ({
          _id: i._id,
          name: i.name,
          description: i.description,
          donation: i.donation,
          file: i.fileName,
        }))
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteCamp = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:9000/admin/Deletecampaign/" + id,
        {
          headers: { Authorization: `Bearer ${user.verifToken}` },
        }
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

  const updateCampaign = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("donation", donation);
    formData.append("file", file);
    formData.append("fileName", fileName);
    console.log(formData, "This is the form at the frontend");
    try {
      const res = await axios.patch(
        "https://damp-stream-39096.herokuapp.com/admin/updateCampaign/" + ID,
        {
          headers: { Authorization: `Bearer ${user.verifToken}` },
        },
        formData
      );
      if (!res) {
        throw new Error("Could not update the campaign");
      }
      alert(`Campaign has been updated`);
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
      title: "donationRequested",
      dataIndex: "donation",
      key: "donation",
    },
    {
      title: "File",
      dataIndex: "fileName",
      key: "fileName",
      render: (text, record) => (
        <a
          href={
            "https://damp-stream-39096.herokuapp.com/uploads/" + record.file
          }
          download
        >
          <Button>Download {record.file}</Button>
        </a>
      ),
    },
  ];

  return (
    <div className="row">
      <h1> Campaign managment </h1>
      <div className="col-lg-6">
        <Form>
          <p>Add campaign</p>
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
              label="donation needed (RS)"
              rules={[
                {
                  required: true,
                  message: "Please Enter donation needed",
                },
              ]}
            >
              <Input
                required
                placeholder="Only Digits"
                onChange={(e) => {
                  setDonation(e.target.value);
                }}
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
              <Button type="primary" htmlType="submit" onClick={postData}>
                submit
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </div>
      {/* Deleting the campaigns */}
      <div className="col-lg-6">
        <Table
          title={() => " Delete campaigns"}
          columns={columns}
          dataSource={camp}
        />
      </div>

      {/* Viewing the campaigns */}
      <div className="col-lg-12">
        <Table
          title={() => " All campaigns"}
          columns={column2}
          dataSource={camp}
        />
      </div>
      {/* Updating campaingn */}
      <div className="col-lg-8">
        <Form>
          <p>Update campaign</p>
          <Form.Item
            rules={[{ required: true, message: "Please Enter campaign name" }]}
          >
            <Col span={15}>
              <Input
                required
                placeholder="Enter campaign id"
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
            </Col>
          </Form.Item>
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
              />
            </Form.Item>
          </Col>
          <Col span={15}>
            <Form.Item
              label="donation needed (RS)"
              rules={[
                {
                  required: true,
                  message: "Please Enter donation needed",
                },
              ]}
            >
              <Input
                required
                placeholder="Only Digits"
                onChange={(e) => {
                  setDonation(e.target.value);
                }}
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
              <Button type="primary" htmlType="submit" onClick={updateCampaign}>
                submit
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </div>
    </div>
  );
}

export default Foorm;
