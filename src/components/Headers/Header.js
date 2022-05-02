import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, IconButton } from "@mui/material";
import globalicon from "../../Images/globalicon.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "60px",
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
  //     document.removeEventListener('scroll', handleScroll) backgroundColor: 'rgba(0, 0, 0, 0.7)'
  //   }
  // }, [])
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <nav class="navbar navbar-expand navbar-custom" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <div class="container-fluid" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}  >


          <img style={{ width: "10%", height: "80%", float: "left" }} src={globalicon} />

          {/* <span class="text-uppercase font-weight-bold">Company</span> */}


          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

          <div id="navbarSupportedContent" class=" mr-sm-2">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active"><a href="/" style={{ color: "white" }} class="nav-link">Home <span class="sr-only">(current)</span></a></li>
              <li class="nav-item"><a href="/News" style={{ color: "white" }} class="nav-link">News</a></li>
              <li class="nav-item"><a href="/Campaign" style={{ color: "white" }} class="nav-link">Services</a></li>
              <li class="nav-item"><a href="/Signin" style={{ color: "white" }} class="nav-link">My account</a></li>
            </ul>
          </div>
        </div>
      </nav>
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