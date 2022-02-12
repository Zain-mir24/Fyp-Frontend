import React from "react";
import { useState } from "react";

export default function Whychooseus() {
  const [description, setDescription] = useState(
    "A huge number of services and works done by high-class experts using the latest technologies. We are here to meet your every demand so you could have no worries about your home!"
  );
  return (
    <div
      className="container"
      style={{ marginTop: "70px", marginBottom: "70px" }}
    >
      <div className="row" style={{ textAlign: "center" }}>
        <h2>WHY CHOOSE GLOBAL REACH</h2>
        <div className="col-lg-4 col-4 choose-block">
          <div>
            <i class="fa fa-handshake "></i>
            <p>We OFFER</p>
          </div>
        </div>
        <div className="col-lg-4 col-4 choose-block">
          <div>
            <i class="fa fa-link"></i>
            <p>We Guarantee</p>
          </div>
        </div>
        <div className="col-lg-4 col-4 choose-block">
          <div>
            <i class="fa fa-bus"></i>
            <p>We Provide</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
