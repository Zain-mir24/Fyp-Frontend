import React, { useState, useEffect } from "react";
import RightSide from "./RightSide";
import Sidebar from "./Sidebar";
import AdminCampaign from "./adminCampaign";
import Paper from "@material-ui/core/Paper";
import { withThemeCreator } from "@material-ui/styles";

function Body() {
  const [rightBar, setRightBar] = useState("Dashboard");


  function displayComponent() {
    if (rightBar === "Dashboard") {
      return <RightSide />;
    } else if(rightBar ==="Campaign"){
      return <AdminCampaign />;
    }
  }

  return (
    <div className="row">
      <div className="col-lg-2">
        <div style={{ backgroundColor: "blue" }}>
          <Paper
            align="left"
            style={{
              paddingTop: "20px",
              fontFamily: "sans-serif",
              backgroundColor: "#368B85",
              color: "white",
            }}
          >
            <p style={styles.text} onClick={() => setRightBar("Analytics")}>
              Dashboard
            </p>
            <p style={styles.text} onClick={() => setRightBar("Analytics")}>
              Analytics
            </p>
            <p style={styles.text} onClick={() => setRightBar("Campaign")}>
              Campaign
            </p>
            <p style={styles.text} onClick={() => setRightBar("Analytics")}>
              Revenue
            </p>
            <p style={styles.text} onClick={() => setRightBar("Analytics")}>
              Orphans
            </p>
            <p style={styles.text} onClick={() => setRightBar("Analytics")}>
              Set Carousel
            </p>
            <p style={styles.text} onClick={() => setRightBar("Analytics")}>
              Upcoming Events
            </p>
          </Paper>
        </div>
      </div>
      <div className="col-lg-10">{displayComponent()}</div>
    </div>
  );
}

const styles = {
  text: {
    paddingLeft: "10px",
    borderBottom: "0.5px solid white",
  },
};
export default Body;
