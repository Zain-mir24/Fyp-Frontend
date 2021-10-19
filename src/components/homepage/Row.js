import React from "react";
import "./Home.css"
function Row() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 ">
            <img class="Rowimage"src={"https://wallpapercave.com/wp/wp3096528.jpg"}></img>
            <p>1st campaign</p>
          </div>{" "}
          <div class="col-lg-4">
            <img  class="Rowimage" src={"https://wallpapercave.com/wp/wp3096528.jpg"}></img>
            <p>1st campaign</p>
          </div>{" "}
          <div class="col-lg-4">
            <img  class="Rowimage"src={"https://wallpapercave.com/wp/wp3096528.jpg"}></img>
            <p>1st campaign</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row;
