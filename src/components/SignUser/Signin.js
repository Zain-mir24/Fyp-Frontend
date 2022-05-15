import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Form, Input, Button, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";



import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect, useDispatch } from "react-redux";
import { LOGIN_USER } from "../../store/Actions/userAction";
import { withRouter } from "react-router";
import { LoggingUser } from "../../store/reducers/User";
import "./Signin.css"
import axios from "axios";
import GlobalReach from "../../Images/pheonix.png"
const dotenv = require("dotenv");
dotenv.config({ debug: process.env.DEBUG });
// signin for already registered user
function SignIn({ history, ...props }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const handlesubmit = async (e) => {
    // e.preventDefault();
    await axios
      .request({
        baseURL: "http://localhost:9000/User",
        url: "/login",
        method: "post",
        data: {
          getEmail,
          getPassword,
        },
      })
      .then((res) => {
        var username = res.data.user.name;
        var userType = res.data.user.userType;
        var userId = res.data.user._id;
        if (res.status == 200) {
          dispatch(
            LOGIN_USER({
              getEmail,
              getPassword,
              username,
              userType,
              userId,
            })
          );

          history.push("/userPanel");
        }
      })
      .catch((e) => {
        alert(`incorrect credential,Either email or password was incorrect.`)
        console.log("our error", e);
      });
  };
  return (
    <div className="containerFluid" style={{ backgroundColor: "#008000" }} >


      <div className="row" >

        {/* <CssBaseline /> */}
        {/* <Grid item xs={12} sm={4} md={7} className={classes.image} /> */}
        {/* <div className="col-lg-6" style={{ alignItems: "flex-start", height: "300px" }}>
          <div className="left2 ">

          </div>
          <h1 style={{ color: "white", marginLeft: "30%", marginTop: "30%" }}>
            Global Reach
          </h1>
          <h4 style={{ color: "white", marginLeft: "30%" }}>
            Welcome to Global Reach,<br></br>
            kindly enter your credentials to login
          </h4>

        </div> */}
        <div className="col-lg-12 left2" style={{
          height: "600px", position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}>

          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.48)", borderRadius: "5px", marginTop: "10%", marginLeft: "auto", marginRight: "auto", height: "300px", width: "30%" }}>
            <h1 style={{ backgroundColor: "rgba(255, 255, 255, 0.48)", textAlign: "center", marginBottom: "20px", fontSize: 30, fontWeight: "60px" }}>
              User Login
            </h1>
            <Form

              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                // style={{
                //   backgroundColor: "rgba(255, 255, 255, 0.48)"
                // }}
                name={['user', 'email']}

                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  style={{
                    // backgroundColor: "rgba(255, 255, 255, 0.48)",
                    height: "50px",
                    width: "60%",
                    marginLeft: "80px",
                  }}
                  prefix={< UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item


                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  style={{
                    // backgroundColor: "rgba(255, 255, 255, 0.48)",
                    height: "50px",
                    width: "60%",
                    marginLeft: "80px",
                  }}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Item
                  style={{ justifyContent: "center" }}
                >
                  <a href="/">

                    <Button
                      style={{ width: "100%", marginLeft: "20px", backgroundColor: "grey" }}
                      type="primary"

                      className="login-form-button"
                      onClick={() => {
                        handlesubmit();
                      }}
                    >
                      back to home
                    </Button>
                  </a>

                </Form.Item>
                <Form.Item
                  style={{ justifyContent: "right" }}
                >
                  <Button
                    style={{ width: "80%", marginLeft: "100px", backgroundColor: "#279040" }}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={() => {
                      handlesubmit();
                    }}
                  >
                    Log in
                  </Button>
                </Form.Item>
              </div>

              <div style={{ flexDirection: "row", marginLeft: "50px" }}>

                <Link href="/forgotPassword" variant="body2" style={{ alignSelf: "flex-end", marginRight: "20px" }}>
                  Forgot password?
                </Link>


                <Link href="/Signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>

              </div>
            </Form>

          </div>

        </div>


        {/* <Grid component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Global Reach Sign in
          </Typography>

          <form className={classes.form} onSubmit={(e) => handlesubmit(e)}>
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
              style={{ padding: "4px" }}
              id="outlined-email-input"
            />
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
              minLength={7}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: "4px" }}
            /> */}
        {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
        {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          
          </form>
        </div>
      </Grid> */}

      </div >
    </div >
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(./Images/Charity.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const mapStateToProps = (state) => ({
  users: state.persistedReducer.user.myuser,
});

export default withRouter(connect(mapStateToProps, { LOGIN_USER })(SignIn));
