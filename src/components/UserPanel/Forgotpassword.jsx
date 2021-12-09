import React,{useState,useEffect} from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Input,Button } from "antd";
import { withRouter } from "react-router";
import axios from "axios";
import { selectUser } from "../../store/reducers/User";
const dotenv = require("dotenv");
dotenv.config();
function Forgotpassword ({history}) {
    const [email,newEmail]=useState("")

    const sendlink= async(e)=>{
        await axios.request({
            baseURL:process.env.REACT_APP_BASE_URL,
            url:"/forgotpassword",
            method:"post",
            data:{
              email  }
          }).then(res=>{
              history.push("/Signin")
          }).catch(e=>{
              console.log("error",e)
          })
    }
    
    return (
        <div>   
            <Form
               name="basic"
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
               initialValues={{ remember: true }}
               autoComplete="off">
                <Form.Item
                label="Enter recovery email"
                name="email"
                onChange={(e)=>{newEmail(e.target.value)}}
                rules={[{ required: true, message: "Please input your Email!" }]}
                >
                      <Input/>
                    </Form.Item>
                    <Form.Item>
               <Button label="Send link "
               onClick={(e)=>sendlink(e)}
               >
                   Send link to this email
               </Button>
               </Form.Item>
                
            </Form>
        </div>
    )
}

export default Forgotpassword
