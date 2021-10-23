import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./LatestNews.css";

export default function LatestNews() {
  return (
    <Carousel>
      <div className="row">
        <div className="col-lg-6 carousel-left-container">
          <div className="carousel-left-content">
            <h1>HELLO WORLD</h1>
            <p>
              hello world this is global reach welcome to our application. We
              hope you help the humanity. Thank you
            </p>
            <button className="carousel-button">READ MORE</button>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="./logo192.png" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 carousel-left-container">
          <div className="carousel-left-content">
            <h1>HELLO WORLD</h1>
            <p>
              hello world this is global reach welcome to our application. We
              hope you help the humanity. Thank you
            </p>
            <button className="carousel-button">READ MORE</button>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="./logo192.png" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 carousel-left-container">
          <div className="carousel-left-content">
            <h1>HELLO WORLD</h1>
            <p>
              hello world this is global reach welcome to our application. We
              hope you help the humanity. Thank you
            </p>
            <button className="carousel-button">READ MORE</button>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="./logo192.png" />
        </div>
      </div>
    </Carousel>
  );
}
