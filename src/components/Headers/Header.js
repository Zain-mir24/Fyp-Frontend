import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, IconButton } from "@mui/material";
import globalicon from "../../Images/globalicon.png"
import { Navbar, Nav, NavItem, NavDropdown, Dropdown } from 'react-bootstrap';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "60px",
  },
  appBarTransparent: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  appBarSolid: {
    backgroundColor: 'rgba(67,129,168)'
  }
}))


function Headers() {

  return (
    <nav class="navbar navbar-expand-lg" style={{ height: "80px", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
      <div class="container-fluid">
        <div style={{ float: "left" }}>

          <img class="navbar-brand" src={globalicon} style={{ height: "20%" }} />

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse justify-content-end ms-auto" style={{ float: "right" }} id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );


}

// <nav class="navbar navbar-expand-sm navbar-light bg-success">
//   <div class="container-fluid ">
//     <a class="navbar-brand " href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse " id="navbarSupportedContent">
//       <ul class="navbar-nav ms-auto">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Course</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>


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