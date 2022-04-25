import React from "react";
import "./background.css";
import { Table, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
//
import brother from "../../Images/abouut.png"
import world from "../../Images/worldmap.png"
function Background() {
  return (
    <div className="containerfluid  rowDiv   ">
      <div className="row" style={{ margin: "0px 0px 10px" }}>
        <div
          className="col-lg-6 wholeDiv"
          style={{
            backgroundImage: `url(${brother})`,
            backgroundSize: "cover",
            position: "relative"
          }}
        >
          <h1 className="align" style={{ color: "white" }}>
            <span style={{ fontSize: "50px" }}>
              About</span> Us
          </h1>

        </div>
        <div className="col-lg-6 wholeDiv" style={{ padding: "20px", backgroundImage: `url(${world})` }}>
          <h1 style={{ padding: "10px" }}>More Services</h1>
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
              backgroundColor: "#279040",
              width: "70%",
              height: "10%",
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
