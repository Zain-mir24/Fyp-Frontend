import React from "react";
import Paper from "@material-ui/core/Paper";
import { withThemeCreator } from "@material-ui/styles";

export default function Sidebar() {
  return (
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
        <p style={styles.text}>Dashboard</p>
        <p style={styles.text}>Analytics</p>
        <p style={styles.text}>Campaign</p>
        <p style={styles.text}>Revenue</p>
        <p style={styles.text}>Orphans</p>
        <p style={styles.text}>Set Carousel</p>
        <p style={styles.text}>Upcoming Events</p>
      </Paper>
    </div>
  );
}

const styles = {
  text: {
    paddingLeft: "10px",
    borderBottom: "0.5px solid white",
  },
};
