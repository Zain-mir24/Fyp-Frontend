import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, IconButton } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    color: 'black',
  },
  appBarTransparent: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)'
  },
  appBarSolid: {
    backgroundColor: 'rgba(67,129,168)'
  }
}))


function Headers() {

  const classes = useStyles()
  // const [navBackground, setNavBackground] = useState('appBarTransparent')
  // const navRef = useRef()
  // navRef.current = navBackground
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const show = window.scrollY > 500
  //     if (show) {
  //       setNavBackground('appBarSolid')
  //     } else {
  //       setNavBackground('appBarTransparent')
  //     }
  //   }
  //   document.addEventListener('scroll', handleScroll)
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>
        <Toolbar>
          <Typography className={classes.title}>
            Yaha Logo aega
          </Typography>
          <a>
            Home
          </a>
          <div class="dropdown show" style={{ marginBottom: "2px" }}>
            <a
              class="btn dropdown-toggle"
              href="/News"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "white" }}
            >
              News
            </a>

            <div
              class="dropdown-menu"
              aria-labelledby="dropdownMenuLink"
            >
              <a class="dropdown-item" href="/News"
              >
                Our  News
              </a>
              <a class="dropdown-item" href="#">
                Audit
              </a>
              <a class="dropdown-item" href="#">
                Zakat
              </a>
            </div>
          </div>
          <a class="nav-link" href="/Campaign" style={{ color: "white" }}>
            <span class="glyphicon glyphicon-user"></span> Services
          </a>
          <a>
            MyAccount
          </a>
        </Toolbar>
      </AppBar>


    </div>
  );


}

export default Headers;


























{/* 
      <div>
        <nav class="navbar  navbar-expand-md " style={{ borderWidth: 1, borderColor: "black" }}>
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              GLOBAL REACH
            </a>
            <button
              data-toggle="collapse"
              class="navbar-toggler"
              data-target="#navcol-1"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navcol-1">
              <ul class="nav navbar-nav navbar-right">
                <li class="nav-item" role="presentation">
                  <a class="nav-link" href="/">
                    Homepage
                  </a>
                </li>
                <li class="nav-item dropdown" role="presentation">
                  <div class="dropdown show" style={{ marginTop: "8px" }}>
                    <a
                      class="btn dropdown-toggle"
                      href="/News"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ color: "black" }}
                    >
                      News
                    </a>

                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a class="dropdown-item" href="/News"
                      >
                        Our  News
                      </a>
                      <a class="dropdown-item" href="#">
                        Audit
                      </a>
                      <a class="dropdown-item" href="#">
                        Zakat
                      </a>
                    </div>
                  </div>
                </li> */}
{/* <li class="nav-item" role="presentation">
                  <a class="nav-link" href="/News">
                    News
                  </a>
                </li> */}
{/* <li class="nav-item" role="presentation">
                  <a class="nav-link" href="/campaign">
                    About us
                  </a>
                </li> */}

{/* <li class="nav-item" role="presentation">
                  <a class="nav-link" href="/Campaign"> */}
{/* <span class="glyphicon glyphicon-user"></span> */ }
{/* About
                  </a>
                </li>

                <li class="nav-item" role="presentation">
                  <a class="nav-link" href="/Campaign">
                    <span class="glyphicon glyphicon-user"></span> Services
                  </a>
                </li>

                <li class="nav-item" role="presentation">
                  <a class="nav-link" href="/Signin">
                    <span class="glyphicon glyphicon-log-in"></span> My Account
                  </a>
                </li>
              </ul> */}
{/* </div>
          </div>
        </nav> */}



{/* </div> */ }