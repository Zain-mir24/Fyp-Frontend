import React, { useState, useEffect } from "react";
import RightSide from "./RightSide";
import Sidebar from "./Sidebar";

function Body() {
  const [rightBar, setRightBar] = useState("Dashboard");

  function displayComponent() {
    if (rightBar === "Dashboard") {
      return <RightSide />;
    } else {
      return <h1>HELLO WORLD</h1>;
    }
  }

  return (
    <div className="row">
      <div className="col-lg-2">
        <Sidebar />
      </div>
      <div className="col-lg-10">{displayComponent()}</div>
    </div>
  );
}

export default Body;
