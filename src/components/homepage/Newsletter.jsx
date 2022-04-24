import { React, useState } from "react";
import { Input, Space, Typography, Button, Form } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import world from "../../Images/worldmap.png"

import axios from "axios";
const { Title } = Typography;

const { Search } = Input;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const onSearch = async () => {
    try {
      await axios.post("http://localhost:9000/adminPanel/saveEmail", {
        Email: email,
      });
      alert("Check your email to verify");
      console.log(email);
    } catch (e) {
      alert("email not subscibed! Sorry for inconvenience. Try again later ");
      console.log(e);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${world})`,
        backgroundColor: "#F5F5F5",
        borderRadius: "5px",
        marginTop: "-10px",
        padding: "20px",
      }}
    >
      <div class="container">
        <div style={{ textAlign: "center" }}>
          <Title style={{ color: "black" }} level={2}>
            <span style={{ fontSize: "40px" }}>Newsletter </span>SignUp
          </Title>
        </div>
        <div
          className="row"
          style={{
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "30px",
            padding: "40px 0",
            width: "40%",
            borderRadius: "5px",
            backgroundColor: "#929292",
          }}
        >
          <h1 style={{ textAlign: "center", color: "white", fontSize: "40px" }}>
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
