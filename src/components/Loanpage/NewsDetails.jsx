import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Headers/Header";
import Whychooseus from "../homepage/whychooseus";
import Wedo from "../homepage/Wedo"
import "./Latestnews.css";
function NewsDetails() {
  return (
    <div>
      <Header />

      <div style={{ marginTop: "-20px" }}>
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
          </a>{" "}
          /{" "}
          <a style={{ color: "#FFFFFF" }} href="/News">
            NewsDetail
          </a>{" "}
        </p>
      </div>
      <div style={{ textAlign:"center" }}>
        <h1>
          News Letter and details
          </h1>
        <img className="perNewsimage" src={"./Images/PoorChild.jpg"}></img>
        <p className="textDesign">
        here are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, 
        by injected humour, or randomised words which don't look even
         slightly believable. If you are going to use a passage of 
         Lorem Ipsum, 
        you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </p>
      </div>
      <Wedo />
      <Footer />
    </div>
  );
}

export default NewsDetails;
