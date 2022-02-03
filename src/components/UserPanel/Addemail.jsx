import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { withRouter, useParams } from "react-router";
import { Button, Card, Col, Row } from "antd";
import axios from "axios";
const dotenv = require("dotenv");
dotenv.config();
function Addemail({ history }) {
  const { _id, token, Email } = useParams();
  console.log(Email);
  const senddata = async (e) => {
    await axios
      .request({
        baseURL: "https://damp-stream-39096.herokuapp.com/adminPanel",
        url: `/saveEmail/${_id}/${token}`,
        method: "post",
        data: {
          Email,
        },
      })
      .then(async (res) => {
        alert(`Thankyou for subscribing`);
        history.push("/");
        res.status(200).send("user verified and added");
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  return (
    <div
      className="mainVerify"
      style={{
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row>
        <Col span={24}>
          <Card
            bordered={false}
            style={{
              width: 300,
              left: "40%",
              position: "absolute",
              textAlign: "center",
            }}
            cover={<img alt="example" src="/Images/Verify.png" />}
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

export default Addemail;
