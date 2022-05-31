import { React, useState } from "react";
import { Input, Space, Typography, Button, Form } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import world from "../../Images/worldmap.png"
import "./Newsletter.css"
import axios from "axios";
import url from "../../config/axios"
const { Title } = Typography;

const { Search } = Input;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const onSearch = async () => {
    try {
      await url.post("/adminPanel/saveEmail", {
        Email: email,
      });
      alert("your email has been added to our newsletter");
      console.log(email);
    } catch (e) {
      alert("email not subscibed! Sorry for inconvenience. Try again later ");
      console.log(e);
    }
  };
  return (
    <div
      className="mainNews"
    >
      <div class="container">
        <div style={{ textAlign: "center" }}>
          <Title style={{ color: "black" }} level={2}>
            <span style={{ fontSize: "40px" }}>Newsletter </span>SignUp
          </Title>
        </div>
        <div
          className="row inTouch"

        >
          <h1 style={{ textAlign: "center", color: "white", fontSize: "40px", marginLeft: "auto", marginRight: "auto" }}>
            Get in touch
          </h1>
          <h3 style={{ textAlign: "center", color: "white" }}>
            Enter your email so we can send you latest news of our organization
          </h3>
          <div className="col-lg-12">
            <Form>
              <Form.Item
                name={['user', 'email']}

                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  placeholder="input your email"
                  allowClear
                  size="medium"

                />
              </Form.Item>

            </Form>

          </div>
          <div className="col-lg-12" style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              htmlType="submit"
              className="login-form-button"
              placeholder="signup" onClick={onSearch} style={{ color: "green", borderColor: "green", }}>
              Signup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
