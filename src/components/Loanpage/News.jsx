import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Headers/Header";
import "./Latestnews.css";
function News() {
  return (
    <div>
      <Header />
      <div>
        <img src={"./Images/Complete.jpg"} className="mainImage"></img>
      </div>
      <div className="textoverimage">
        <h1 className="title">Latest News </h1>
        <p>
          <a style={{ color: "#FFFFFF" }} href="/">
            Home
          </a>{" "}
          /{" "}
          <a style={{ color: "#FFFFFF" }} href="/News">
            News
          </a>{" "}
        </p>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">

            <a href="/NewsDetails"><h1>
              See our Going campaigns
            </h1></a>

            <p style={{ fontSize: 25 }}>
              The campaigns that we have completed. How we help the people and our organization is only for the people
              and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
              and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
              and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
              and it is to the people.
            </p>
            july 21,2021

          </div>
          <div className="col-lg-6" style={{ textAlign: "left" }}>
            <img className="styleImages" src={"./Images/Latest.png"}></img>
          </div>
          <div className="col-lg-6">
            <img className="styleImages" src={"./Images/Ongoing.jpg"}></img>
          </div>
          <div className="col-lg-6" style={{ textAlign: "left" }}>
            <h1>
              <a style={{ color: "black" }} href="/NewsDetails">
                See our  Completed campaigns
              </a>
            </h1>

            <p style={{ fontSize: 25 }}>
              The campaigns that we have completed. How we help the people and our organization is only for the people
              and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
              and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
              and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
              and it is to the people.
            </p>
            july 21,2021
          </div>
          <div className="col-lg-12">
            <img className="mainImage" src={"./Images/Blog1.jpg"}></img>
            <div className="centered">
              <h1 style={{ color: "white" }}>
                Click to see our photo gallery
              </h1>
            </div>
          </div>
          {/* <div className="col-lg-6" style={{ textAlign: "left" }}>
            <h3>
              Completed Campaigns
            </h3>
            july 21,2021
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default News;
