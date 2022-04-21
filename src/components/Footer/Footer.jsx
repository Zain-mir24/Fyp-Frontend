import React from "react";
import "./footer.css";
import { CheckOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <div className="container-fluid footerDiv">
     
      <div className=" row " style={{marginTop:"18px"}}>
        <div className="col-lg-4">
          <div className="footerHeading">Contact</div>
          <p className="about">
          Plot No. ZC-5, Sector 8/A,
          <br /> Opp: FTC Bridge, <br />
          Shahrah-e-Faisal, Karachi-74400,
          <br /> Sindh, Pakistan.
          <br /> +92-21-111-92-1020 +92-21-111-111-134 +92-21-111-111-136 1020.{" "}
          <br /> <br />
          info@global.org +923008581020
          </p>
        </div>
        <div className="col-lg-4">
        <div className="footerHeading">Services</div>
            <p className="about">
                <CheckOutlined style={{color:"#98FB98"}} /> Giving Loans
              </p>
              <p className="about" >
                <CheckOutlined style={{color:"#98FB98"}}/> Donations to cause  
              </p>
              <p className="about" >
                <CheckOutlined style={{color:"#98FB98"}}/> Live chat
              </p>
              <p className="about" >
                <CheckOutlined style={{color:"#98FB98"}}/> Track of donation record
              </p>
        </div>
        <div className="col-lg-4">
        <div className="footerHeading">About</div>
          <p className="about">
          Jardinier is a large company with more than 10 years of experience 
          in helping people with their house problems and malfunctions. 
          During our work we helped a huge number of people and have garnered a
           reputation as a stable company 
          with a team of real skilled experts who don’t fear any difficulties
          </p>
        </div>

        <p style={{ textAlign: "left", color: "white" }}></p>
      </div>
    </div>
  );
}

export default Footer;
