import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Input,
  Upload,
  Col,
  Form,
  Select,
  Row,
  Radio,
} from "antd";
import axios from "axios";
const dotenv = require("dotenv");
dotenv.config({ debug: process.env.DEBUG });
function SubAdmin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Location, setlocation] = useState("");
  const [subbAdmin,setSubAdmin]=useState("")
  const [ID, setId] = useState("");
   var subAdmin=true
  
  useEffect(() => {
    viewsubAdmin();
  }, []);
  const handlesubmit = async (e) => {
    try {
      const addsubAdmin = await axios.request({
        baseURL: "http://localhost:9000/",
        url: "admin/SubAdminadd",
        method: "post",
        data: {
          name,
          email,
          password,
          subAdmin,
          Location,
        },
      });
      if (!addsubAdmin) {
        console.log("There was an error");
      } else {
        console.log(addsubAdmin)
        alert(`A new sub admin Created`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updatesubAdmin = async (e) => {
    try {
      const addsubAdmin = await axios.request({
        baseURL: "http://localhost:9000/",
        url: "admin/updatesubAdmin/"+ID,
        method: "patch",
        data: {
          name,
          email,
          password,
          Location,
          SubAdmin: true,
        },
      });
      if (!addsubAdmin) {
        console.log("There was an error");
      } else {
        alert(`Subadmin updation done`);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const deletesubAdmin = async(id)=>{
    try {
      const res = await axios.delete(
       "http://localhost:9000/admin/deletesubAdmin/" + id
      );
      if (!res) {
        throw new Error("The campaign doesnt exist");
      }
      alert(`SubAdmin has been deleted`);
    } catch (e) {
      console.log(e);
    } 
  };
  const viewsubAdmin = async( )=>{
    try {
      const res = await axios.get("http://localhost:9000/admin/viewsubAdmin");

      await setSubAdmin(res.data);
      console.log(res.data, "TESTING");
    } catch (err) {
      console.log(err);
    }
  };
  const value=subbAdmin==0?null:subbAdmin.map((item)=>({
    _id:item._id,  
    name:item.name,
    email:item.email,
    Location:item.Location

  }))
  const columns = [
    {
      title: "id",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Location",
      dataIndex: "Location",
      key: "Location",
    },

   
  ]; const columns1 = [
    {
      title: "id",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Location",
      dataIndex: "Location",
      key: "Location",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <button
          onClick={() => {
            deletesubAdmin(record._id);
          }}
        >
          Delete
        </button>
      ),
    },
   
  ];
  return (
    <div className="row">
      <h1> SubAdmin Managment</h1>
      <div className="col-lg-6">
        <h3>Adding sub Admin</h3>
        <Row>
          {/* Adding SubAdmin */}
          <Col span={12}>
            <Form>
              <Form.Item
                rules={[
                  { required: true, message: "Please Enter campaign name" },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                  placeholder=" User name"
                />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Enter campaign Description",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  placeholder="Email"
                  showCount
                />
              </Form.Item>{" "}
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Enter Loaction of Admin",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setlocation(e.target.value);
                  }}
                  required
                  placeholder="Location"
                  showCount
                />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Enter SubAdmin's password",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  placeholder="Password"
                />
              </Form.Item>
              <Button
                onClick={() => {
                  handlesubmit();
                }}
                type="primary"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
      <div className="col-lg-6">
        <h3>updating sub Admin</h3>
        <Row>
          {/* updating SubAdmin */}
          <Col span={12}>
            <Form>
            <Form.Item
                rules={[
                  { required: true, message: "Please Enter SubAdmin id" },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  required
                  placeholder="SubAdmin Id"
                />
              </Form.Item>
              <Form.Item
                rules={[
                  { required: true, message: "Please Enter SubAdmin name" },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                  placeholder=" User name"
                />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Enter campaign Description",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  placeholder="Email"
                  showCount
                />
              </Form.Item>{" "}
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Enter Loaction of Admin",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setlocation(e.target.value);
                  }}
                  required
                  placeholder="Location"
                  showCount
                />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Enter SubAdmin's password",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  placeholder="Password"
                />
              </Form.Item>
              <Button
                onClick={() => {
                  updatesubAdmin();
                }}
                type="primary"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
      <div className="col-lg-12">
        <Table columns={columns} dataSource={value}title={() => " Viewing subAdmins"} />
      </div>
      <div className="col-lg-12">
        <Table
          title={() => " Deleting subAdmins"}
          columns={columns1}
          dataSource={value}
        />
      </div>
    </div>
  );
}

export default SubAdmin;
