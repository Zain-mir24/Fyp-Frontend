import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { withThemeCreator } from "@material-ui/styles";

function CampaignCard() {
  return (
    <div style={styles.container}>
      <h1>Hello World</h1>
      <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h3>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: "url('./logo192.png')",
    backgroundRepeat: "no-repeat",
    height: "700px",
    textAlign: "left",
  },
};
export default CampaignCard;
