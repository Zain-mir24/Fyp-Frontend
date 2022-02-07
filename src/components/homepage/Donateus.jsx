import React from "react";
import "./donate.css";
import { CreditCardOutlined, BankOutlined } from "@ant-design/icons";

function Donateus() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Ways to donates us</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-6  ">
          
            <div className="col-lg-6 onlineT" style={{ textAlign: "center" }}>
             <a href="/">
                <h5 style={{ marginTop: "50px" }}> Online </h5>
             </a>
                <CreditCardOutlined style={{ fontSize: "26px" }} />
             
            </div>
            
          </div>
          <div className="col-lg-6">
            <div className="col-lg-6 onlineT" style={{ textAlign: "center" }}>
              <a href="/">
                <h5 style={{ marginTop: "50px" }}> Bank </h5>
              </a>
               
                <BankOutlined style={{ fontSize: "26px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donateus;
