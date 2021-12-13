import { React, useState } from "react";
import { Input, Space, Typography } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import axios from "axios";
const { Title } = Typography;

const { Search } = Input;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const onSearch = async () => {
    try {
      await axios.post("http://localhost:9000/adminPanel/saveemail", {
        Email: email,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div style={{ backgroundColor: "#007a00" }}>
      <div class="container" style={{ padding: "60px 0" }}>
        <div style={{ textAlign: "center" }}>
          <Title style={{ color: "white" }} level={2}>
            Newsletter SignUp
          </Title>
        </div>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Sign Up"
          size="medium"
          onPressEnter={onSearch}
        />
      </div>
    </div>
  );
}
