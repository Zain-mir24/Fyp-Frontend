import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Card } from "antd";
import { withRouter, useParams } from "react-router";
import { ADD_USER, LOGIN_USER } from "../../store/Actions/userAction";

import axios from "axios";
import { addingUser } from "../../store/reducers/User";

function AddUser({ history }) {
  const { _id, token, name, email, password, userType } = useParams();
  const dispatch = useDispatch();
  console.log(name);
  const senddata = async (e) => {
    await axios
      .request({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: `/signup/${_id}/${token}`,
        method: "post",
        data: {
          name,
          email,
          password,
          userType,
        },
      })
      .then(async (res) => {
        alert(`You Are Verified`);
        history.push("/Signin");
        await dispatch(
          addingUser({
            name: name,
            email: email,
            password: password,
            userType: userType,
          })
        );
        res.status(200).send("user verified and added");
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  return (
    <div>
      <Card
        title="Global Reach Verification"
        bordered={false}
        style={{ width: 300 }}
      >
        <Button
          onClick={() => {
            senddata();
          }}
        >
          VERIFY THE EMAIL
        </Button>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.user.users,
});

export default withRouter(connect(mapStateToProps, { ADD_USER })(AddUser));
