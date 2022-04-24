import { React, useState } from "react";
import { Input, Space, Typography, Button } from "antd";
import { AudioOutlined } from "@ant-design/icons";
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
        backgroundColor: "#F5F5F5",
        borderRadius: "5px",
        marginTop: "-10px",
        padding: "20px",
      }}
    >
      <div class="container">
        <div style={{ textAlign: "center" }}>
          <Title style={{ color: "black" }} level={2}>
            Newsletter SignUp
          </Title>
        </div>
        <div
          className="row"
          style={{
            width: "50%",
            marginLeft: "25%",
            marginBottom: "30px",
            padding: "60px 0",
            width: "50%",
            borderRadius: "5px",
            backgroundColor: "#98FB98",
          }}
        >
          <div className="col-lg-10">
            <Input
              placeholder="input your email"
              allowClear
              size="medium"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="col-lg-2">
            <Button placeholder="signup" onClick={onSearch}>
              Signup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
