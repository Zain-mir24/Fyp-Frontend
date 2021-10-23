import React from "react";
import "./Home.css";
function Row() {
  return (
    <div>
      <h1 style={{ textAlign: "center", background: "green" }}>Campaigns</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 " style={{background:"EBFFEB"}}>
            <p>Helping the world</p>
          </div>{" "}
          <div class="col-lg-4">
            <img
              class="Rowimage"
              src={"https://wallpapercave.com/wp/wp3096528.jpg"}
            ></img>
          </div>{" "}
        </div>{" "}
        <div class="row">
          <div class="col-lg-8 ">
            <p>rickshaw campaign</p>
          </div>{" "}
          <div class="col-lg-4">
            <img
              class="Rowimage"
              src={"https://tse3.mm.bing.net/th?id=OIP.ypoo-CSBP_F3cOebqqZt2AHaE0&pid=Api&P=0&w=252&h=164"}
            ></img>
          </div>{" "}
        </div>{" "}
        <div class="row">
          <div class="col-lg-8 ">
            <p>3rd campaign</p>
          </div>{" "}
          <div class="col-lg-4">
            <img
              class="Rowimage"
              src={"https://wallpapercave.com/wp/wp3096528.jpg"}
            ></img>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Row;
