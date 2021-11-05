import React,{useState,useEffect} from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Input,Button } from "antd";
import { withRouter } from "react-router";
import axios from "axios";
import { selectUser } from "../../store/reducers/User";

function Forgotpassword () {
    const [email,newEmail]=useState("")

    const sendlink= async(e)=>{
        await axios.request({
            baseURL:"http://localhost:9000/User",
            url:"/forgotpassword",
            method:"post",
            data:{
              email  }
          }).then(res=>{
              
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
                label="email"
                name="email"
                onChange={(e)=>{newEmail(e.target.value)}}
                rules={[{ required: true, message: "Please input your password!" }]}
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
