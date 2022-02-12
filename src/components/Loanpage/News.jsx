import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Headers/Header";
import "./Latestnews.css";
function News() {
  return (
    <div>
      <Header />
      <div>
        <img src={"./Images/blog1.jpg"} className="Loanbackground"></img>
      </div>
      <div className="textoverimage">
        <h1 className="title">Latest News for our page</h1>
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
            <img className="styleImages" src={"./Images/disaster.jpg"}></img>
          </div>
          <div className="col-lg-6" style={{ textAlign: "left" }}>
            <h3>
              På Vanløsehøj i vanløse, har vi stået for en facaderenovering af
              både gård og front
              Our Latest news 1
            </h3>
            july 21,2021
          </div>
          <div className="col-lg-6">
            <img className="styleImages" src={"./Images/disaster.jpg"}></img>
          </div>
          <div className="col-lg-6" style={{ textAlign: "left" }}>
            <h3>
              På Vanløsehøj i vanløse, har vi stået for en facaderenovering af
              både gård og front
              Our Latest news 1
            </h3>
            july 21,2021
          </div>
          <div className="col-lg-6">
            <img className="styleImages" src={"./Images/disaster.jpg"}></img>
          </div>
          <div className="col-lg-6" style={{ textAlign: "left" }}>
            <h3>
              På Vanløsehøj i vanløse, har vi stået for en facaderenovering af
              både gård og front
              Our Latest news 1
            </h3>
             july 21,2021
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default News;
