import React, { useEffect, useState } from "react";
import { Table, Button, Input, Upload, Col, Form, Select } from "antd";

import axios from "axios";

export default function Youtube() {
  const [link, setLink] = useState("");
  const [linkData, setLinkData] = useState([]);

  const getLinkData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/admin/viewYoutubeDetail"
      );
      setLinkData(res.data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const deleteYoutubeLink = async (id) => {
    try {
      const res = axios.delete(
        "http://localhost:9000/admin/deleteYoutubeDetail/" + id
      );
      console.log(res);
      alert(`Video has been Deleted`);
    } catch (e) {
      alert(`Video is not Deleted`);
      console.log(e);
    }
  };

  useEffect(getLinkData, []);

  const columns = [
    {
      title: "_id",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Link",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <button
          onClick={() => {
            deleteYoutubeLink(record._id);
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  const postData = async (e) => {
    try {
      const res = await axios.post(
        "http://localhost:9000/admin/addYoutubeDetail",
        {
          link: link,
        }
      );
      alert(`Video has been Added`);
      console.log(res);
    } catch (ex) {
      alert(`News not Created`);

      console.log(ex);
    }
  };

  const value = linkData.map((item) => ({
    _id: item._id,
    link: item.link,
  }));
  //   const value = [{ link: "J" }];

  return (
    <div style={{ height: "600px", overflow: "scroll" }}>
      <Form>
        <p>Add Youtube Link</p>
        <Form.Item
          rules={[{ required: true, message: "Please Enter campaign name" }]}
        >
          <Input
            required
            placeholder="Enter Youtube Link"
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={postData}>
            submit
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={value} />
    </div>
  );
}
