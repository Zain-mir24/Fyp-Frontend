import React, { useState, useEffect } from "react";
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
// import Container from '@material-ui/core/Container';

export default function SignIn() {
  const classes = useStyles();
  const [getApi, setApi] = useState("");

  return (
    <div
      style={{ backgroundImage: "url('./GlobalReachBackgroundTexture.png')" }}
    >
      <div className="container" style={styles.parentdiv}>
        <div className="row">
          <div className="col-lg-6 col-md-6" style={styles.upperBoxLeft}>
            <div style={{ textAlign: "center" }}>
              <img
                style={styles.rightBannerImage}
                src="./GlobalReachBannerImage.png"
              ></img>
            </div>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  textShadow: "1px 1px #aaaaaa",
                  color: "#8D2828",
                }}
              >
                FEEDBACK <br></br> REPORT <br></br> 2020/2021
              </h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6" style={styles.rightUpperBox}>
            <div>
              <img style={styles.logo} src="./globalReachLogo.png"></img>
            </div>
            <div style={{ padding: "30px 30px 30px 100px" }}>
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
              <table
                border="4px"
                style={{ borderCollapse: "Collapse", marginLeft: "auto" }}
              >
                <tr style={{ backgroundColor: "lightgreen" }}>
                  <th style={styles.td}>Donations can be made to:</th>
                </tr>
                <tr>
                  <td style={styles.td}>GLOBAL REACH</td>
                </tr>
                <tr>
                  <td
                    style={
                      (styles.td,
                      {
                        backgroundColor: "lightpink",
                        border: "1px solid black",
                      })
                    }
                  >
                    BANK LLOYDS BANK
                  </td>
                </tr>
                <tr>
                  <td style={styles.td}>SORT CODE: 309897</td>
                </tr>
                <tr>
                  <td
                    style={
                      (styles.td,
                      {
                        backgroundColor: "lightpink",
                        border: "1px solid black",
                      })
                    }
                  >
                    ACCOUNT: 81119160
                  </td>
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
  upperBoxLeft: {},
  table: {},
  paragraph: {
    fontSize: "24px",
    fontWeight: "600",
  },
  td: {
    border: "1px solid #333",
  },
  rightUpperBox: {
    backgroundColor: "white",
    boxShadow: "-3px 0px 10px 2px #000000",
  },
  logo: {
    display: "block",
    marginLeft: "auto",
    textAlign: "right",
    width: "200px",
    height: "100px",
  },
  rightBannerImage: {
    height: "500px",
    width: "500px",
    marginTop: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
};
