import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Input, Button } from "antd";
import { withRouter, useParams } from "react-router";
import axios from "axios";
import url from "../../config/axios"
import { selectUser } from "../../store/reducers/User";

function ResetPassword(history) {
  const [pass, newPass] = useState("");
  const { _id, token } = useParams();
  const senddata = async (e) => {
    await url.post(
      "/User/resetpassword/" + _id + "/" + token,

      {
        pass,
      },
    )
      .then((res) => {
        alert("Password has been updated");
        history.push("/Signin")
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="newPassword"
          name="newPassword"
          onChange={(e) => {
            newPass(e.target.value);
          }}
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button label="Send link " onClick={(e) => senddata(e)}>
            UpdatePassword
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ResetPassword;
