import { React, useState } from "react";
import { Input, Space, Typography ,Button} from "antd";
import { AudioOutlined } from "@ant-design/icons";
import axios from "axios";
const { Title } = Typography;

const { Search } = Input;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const onSearch = async () => {
    try {
      await axios.post("http://localhost:9000/adminPanel/saveEmail", 
      { Email: email}
      );
      alert('Check your email to verify')
      console.log(email)
    } catch (e) {
      alert('email not subscibed! Sorry for inconvenience. Try again later ')
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
        <div>

        
        <Input
          placeholder="input your email"
          allowClear
          size="medium"
          onChange={(e)=>{
            setEmail(e.target.value)  
          }}
          
        />
           <Button placeholder="signup"onClick={onSearch} >
             Signup
           </Button>
           </div>
      </div>
    </div>
  );
}
