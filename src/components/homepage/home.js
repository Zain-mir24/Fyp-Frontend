import React, { useState, useEffect } from "react";
import Navbar from "../design/Navbar"
import { makeStyles } from "@material-ui/core/styles";
// import Container from '@material-ui/core/Container';

export default function SignIn() {
  const classes = useStyles();
  const [getApi, setApi] = useState("");

  return (
    <div>
      <div className="container" style={styles.parentdiv}>
        <div className="row">
          <div className="col-lg-6 col-md-6" style={styles.upperBoxLeft}></div>
          <div className="col-lg-6 col-md-6">
            <div>
              <img></img>
            </div>
            <div>
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
            <div style={styles.table}>
              <table style={{ borderCollapse: "Collapse" }}>
                <tr>
                  <th style={styles.td}>Donations can be made to:</th>
                </tr>
                <tr>
                  <td style={styles.td}>GLOBAL REACH</td>
                </tr>
                <tr>
                  <td style={styles.td}>BANK LLOYDS BANK</td>
                </tr>
                <tr>
                  <td style={styles.td}>SORT CODE: 309897</td>
                </tr>
                <tr>
                  <td style={styles.td}>ACCOUNT: 81119160</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({}));

const styles = {
  parentdiv: {
    textAlign: "left",
  },
  upperBoxLeft: {
    backgroundColor: "green",
  },
  table: {
    textAlign: "right",
  },
  paragraph: {
    fontSize: "28px",
  },
  td: {
    border: "1px solid #333",
  },
};
