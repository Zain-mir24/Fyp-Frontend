import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Paper from "@material-ui/core/Paper";
import "./Signup.css";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { connect, useDispatch } from "react-redux";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
const dotenv = require("dotenv");
dotenv.config();
// singup form for new users
export default function SignUp({ history, ...props }) {
  const classes = useStyles();
  const [getname, setname] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [type, setType] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    await axios
      .request({
<<<<<<< HEAD
        baseURL: '"http://localhost:9000/User',
        url: `/Signup`,
=======
        baseURL: "http://localhost:9000/User",
        url: "/Signup",
>>>>>>> 07dff5b2833a2eb80d74f705265ce38b266708a5
        method: "post",
        data: {
          name: getname,
          email: getEmail,
          password: getPassword,
          userType: type,
        },
      })
      .then((res) => {
        alert(`${getname} \n 
        You have recieved veirfication email. Check your mail`);
        console.log("email sent");
        res.status(201).send("email sent");
      })
      .catch((e) => {
<<<<<<< HEAD
        console.log(e);
=======
        console.log("My error", e);
>>>>>>> 07dff5b2833a2eb80d74f705265ce38b266708a5
      });
  };
  return (
    <div className="mainSignup">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />

          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Global reach Sign up
            </Typography>

            <form className={classes.form} onSubmit={(e) => handlesubmit(e)}>
              <Grid component={Paper} container spacing={2}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Please choose your role carefully
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="beneficiary"
                      onClick={() => {
                        setType("beneficiary");
                      }}
                      control={<Radio />}
                      label="benficiary"
                    />
                    <FormControlLabel
                      value="donor"
                      onClick={() => {
                        setType("donor");
                      }}
                      control={<Radio />}
                      label="donor"
                    />
                  </RadioGroup>
                </FormControl>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Name"
                    autoFocus
                    value={getname}
                    onChange={(e) => setname(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={getEmail}
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    placeholder="password"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={getPassword}
                    inputProps={{ minLength: 7 }}
                    minLength={7}
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/Signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Container>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
