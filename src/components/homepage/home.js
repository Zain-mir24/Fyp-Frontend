import React, { useState, useEffect } from "react";
import NAVbar from "../design/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Headers/Header";
import Row from "./Row";
import Whyus from "./Whyus";
import LatestNews from "../LatestNews/LatestNews";
// import Container from '@material-ui/core/Container';

export default function SignIn() {
  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-lg-12 col-md-12 col-xs-12">
          <LatestNews />
          <div>
            <h1 style={styles.heading}>Global Reach</h1>
            <p style={styles.paragraph}>
              GLOBAL REACH is providing an update to all our donors who have
              supported our work through their donations with great generosity
              after last Ramazan 1441 AH up to Rajab 1442AH.
            </p>
            <p style={styles.paragraph}>
              GLOBAL REACH is providing an update to all our donors who have
              supported our work through their donations with great generosity
              after last Ramazan 1441 AH up to Rajab 1442AH.
            </p>
          </div>
          <Row />
          <Whyus />
        </div>
      </div>
    </div>
  );
}
const styles = {
  parentdiv: {
    textAlign: "left",
  },
  image: {
    width: "100%",
  },

  paragraph: {
    fontSize: "28px",
  },
  td: {
    border: "1px solid #333",
  },
  heading: {
    textAlign: "center",
  },
};
