import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Headers/Header";
import "./Latestnews.css";
function NewsDetails() {
  return (
    <div>
      <Header />
     
      <div style={{marginTop:"-20px"}}>
        <img className="mainNewsDiv" src={"./Images/NewsDetail.jpg"}></img>
      </div>
      <div className="textoverimage">
        <h1 className="title">News Details for our page</h1>
        <p>
          <a style={{ color: "#FFFFFF" }} href="/">
            Home
          </a>{" "}
          /{" "}
          <a style={{ color: "#FFFFFF" }} href="/News">
            News
          </a>{" "} /{" "}
          <a style={{ color: "#FFFFFF" }} href="/News">
            NewsDetail
          </a>{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default NewsDetails;
