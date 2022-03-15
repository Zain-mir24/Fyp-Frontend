import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Card, Col, Row, Image } from "antd";
import { withRouter, useParams } from "react-router";
import { ADD_USER, LOGIN_USER } from "../../store/Actions/userAction";
import "./verify.css";
import axios from "axios";
import { addingUser } from "../../store/reducers/User";
const dotenv = require("dotenv");
dotenv.config();
function AddUser({ history }) {
  const { _id, token, name, email, password, userType } = useParams();
  const dispatch = useDispatch();
  console.log(name);
  const senddata = async (e) => {
    await axios
      .request({
        baseURL: "http://localhost:9000/User",
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
    <div className="mainVerify" style={{ position: "relative", alignItems: "center", justifyContent: "center" }}>
      <Row >
        <Col span={24}
        >
          <Card

            bordered={false}
            style={{ width: 300, left: "40%", position: "absolute", textAlign: "center" }}
            cover={
              <img
                alt="example"
                src="/Images/Verify.png"
              />
            }
          >
            <Button
              style={{ backgroundColor: "#A2FFC8", marginTop: "50px" }}
              onClick={() => {
                senddata();
              }}
            >
              VERIFY THE EMAIL
            </Button>

          </Card>
        </Col>

      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.persistedReducer.user.user,
});

export default withRouter(connect(mapStateToProps, { ADD_USER })(AddUser));
