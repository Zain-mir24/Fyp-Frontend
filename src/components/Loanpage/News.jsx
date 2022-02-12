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
          <div></div>
          <div></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default News;
