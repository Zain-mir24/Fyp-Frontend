import React,{useState,useEffect} from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Input,Button } from "antd";
import { withRouter } from "react-router";
import axios from "axios";
import { selectUser } from "../../store/reducers/User";
function Changepassword({history,...props}) {
 
    const[oldpass,setoldpass]=useState("")
    const [newpass,setnewpass]=useState("")
    const [confirmpass,setconfirmpass]=useState("")
    const user = useSelector(selectUser);
    const email=user.getEmail
   const checkpassword= async(e)=>{
    e.preventDefault();
    await axios.request({
      baseURL:"http://localhost:9000/User",
      url:"/changepassword",
      method:"post",
      data:{
        email,
        oldpass,
        newpass,
        confirmpass
      }
    }).then(res=>{
      if(res.status==201){
        history.push("/Signin")
        console.log("password changed")
      }
    }).catch(e=>{
      console.log("passowrd didnt change ",e)
    })
    
   }
  return (
    <div>
      <div style={{ justifyContent: "center" }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
         
        >
          <Form.Item
            label="OldPassword"
            name="Oldpassword"
            rules={[{ required: true, message: "Please input your password!" }]}
            onChange={(e)=>{
              setoldpass(e.target.value)
            }}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="NewPassword"
            name="Newpassword"
            rules={[{ required: true, message: "Please input your password!" }]}
            onChange={(e)=>{
              setnewpass(e.target.value)
            }}
         
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="confirmPassword"
            name="confirmPassword"
            rules={[{ required: true, message: "Please input your password!" }]}
            onChange={(e)=>{
              setconfirmpass(e.target.value)
            }}
          >
            <Input.Password />
          </Form.Item>
          <Button
          disabled={newpass!==confirmpass}
          onClick={(e)=>{
            checkpassword(e)
          }}>Change password</Button>
          <Button 
          onClick={(e) => {
            history.goBack()
          }}>
            Back
          </Button>
        </Form>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.user.myuser,
});
export default withRouter(connect(mapStateToProps)(Changepassword));
