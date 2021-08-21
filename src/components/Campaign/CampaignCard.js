import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { withThemeCreator } from "@material-ui/styles";

function CampaignCard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Rikshaw Campaign For Chaudhary Zain</h1>
      <h3 style={styles.heading}>
        Chaudhary Zain Naeem Mir Khawaja is very in need of Rikshaw as he cannot
        find suitable job in field of Computer Science. Kindly donate some money
        to help my mazloom friend.
      </h3>
      <button className="btn btn-danger">DONATE NOW</button>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: "url('./Hepkursus-header.jpg')",
    backgroundRepeat: "no-repeat",
    height: "300px",
    paddingTop: "50px",
    marginBottom: "30px",
  },
  heading: {
    color: "white",
    fontFamily: "Roboto-Mono",
  },
};
export default CampaignCard;
