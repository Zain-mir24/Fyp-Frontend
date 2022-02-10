import React from "react";
import "./background.css";
import { Table, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
//
function Background() {
  return (
    <div className="containerfluid  rowDiv   ">
      <div className="row" style={{ margin: "10px" }}>
        <div
          className="col-lg-6 wholeDiv"
          style={{
            backgroundImage: ` url(${"./Images/home.jpeg"})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="col-lg-6 wholeDiv">
          <h1 style={{ textAlign: "center" }}>More Services</h1>
          <p className=" textDiv">
            Check the whole list of charity services we offer and select what is
            the appropriate one for you.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <p className="miniText">
                <CheckOutlined /> Donation
              </p>
              <p className="miniText">
                <CheckOutlined /> Beneficiary
              </p>
              <p className="miniText">
                <CheckOutlined /> Live chat
              </p>
              <p className="miniText">
                <CheckOutlined /> Track of donation record
              </p>
            </div>
            <div className="col-lg-6">
              <p className="miniText">
                <CheckOutlined /> Campaigns
              </p>
              <p className="miniText">
                <CheckOutlined /> Volunteer work
              </p>
              <p className="miniText">
                <CheckOutlined /> Sadqah
              </p>
              <p className="miniText">
                <CheckOutlined /> Interest free Loan
              </p>
              </div>
          </div>
          <Button
            style={{
              margin: "10%",
              backgroundColor: "#fe8a01",
              width: "70%",
              height:"20%"
            }}
          >
            Services
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Background;