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
