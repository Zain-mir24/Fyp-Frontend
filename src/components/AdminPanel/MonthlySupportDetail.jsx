import React from "react";
import { Table, Button, Image } from "antd";
export default function MonthlySupportDetail(props) {
  console.log(props, "HELL");
  return (
    <div style={{ height: "600px", overflow: "scroll" }}>
      <div style={{ backgroundColor: "white", padding: "50px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <Image src="/Images/GlobalReach.png" />
            </div>
            <div className="col-lg-6" style={{ position: "relative" }}>
              <div style={{ position: "absolute", right: "0px" }}>
                <p style={{ color: "black" }}>
                  <b>ISLAMABAD OFFICE:</b> <br />
                  House No 15, Block‐3, 502 Colony <br />
                  Quarters, <br />
                  Adyala Road Rawalpindi, Pakistan.
                  <br />
                  Tel: +92 349 4271027
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#019267",
              marginTop: "25px",
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "white", padding: "10px" }}>
              Monthly Support {props.data.bid.name}
            </h1>
          </div>
          <h2>Monthly Details</h2>
          <div style={{ padding: "20px", backgroundColor: "#C0A080" }}></div>

          <br />
          <br />

          <div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Name</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.bid.name}</li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Residential Address</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.presentAddress}</li>
              </ul>
            </div>

            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Family Details</span>{" "}
              <ul className="pdf-list-ul">
                {props.data.widowfamdetail.map((item) => {
                  return (
                    <li className="pdf-list-li">
                      Name: {item.name} | Age: {item.age} | Income:{item.income}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Siblings Details</span>{" "}
              <ul className="pdf-list-ul">
                {props.data.widowsibilings.map((item) => {
                  return (
                    <li className="pdf-list-li">
                      Name: {item.name} | Age: {item.age} | Income:{item.income}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Medicine Cost</span>{" "}
              <ul className="pdf-list-ul">
                {" "}
                <li className="pdf-list-li">{props.data.medicineCost}</li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Total Amount Required</span>{" "}
              <ul className="pdf-list-ul">
                {" "}
                <li className="pdf-list-li">
                  {props.data.totalamountdonation}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a
          href={"https://cryptic-taiga-42129.herokuapp.com/uploads/" + props.data.bformname}
          download
        >
          <Button
            style={{
              width: "100%",
              wordWrap: "break-word",
              whiteSpace: "normal",
              height: "100%",
            }}
          >
            Download BForm
          </Button>
        </a>
        <br /> <br />
        <a
          href={
            "https://cryptic-taiga-42129.herokuapp.com/uploads/" + props.data.deathcertificatename
          }
          download
        >
          <Button
            style={{
              width: "100%",
              wordWrap: "break-word",
              whiteSpace: "normal",
              height: "100%",
            }}
          >
            Download Death Certificate
          </Button>
        </a>
      </div>
    </div>
  );
}
