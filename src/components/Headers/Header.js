import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

import { makeStyles } from "@material-ui/core/styles";
import globalicon from "../../Images/globalicon.png";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     height: "60px",
//   },
//   appBarTransparent: {
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//   },
//   appBarSolid: {
//     backgroundColor: "rgba(67,129,168)",
//   },
// }));

function Headers() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark transparent-head fixed-top"
      style={{
        margin: "0 0 150px",
      }}
    >
      <a class="navbar-brand" href="">
        <img
          className="navbar-brand"
          src={globalicon}
          // style={{ position: "absolute", top: "0" }}
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item ">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/news">
              News
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Campaign">
              Campaign
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Video">
              Social Media
            </a>
          </li>
        </ul>
      </div>
      <div style={{ paddingLeft: "150px" }}></div>
    </nav>
    // <nav
    //   className="navbar navbar-expand-lg"
    //   style={{ height: "80px", backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    // >
    //   <div className="container-fluid">
    //     <div>
    //       <img
    //         className="navbar-brand"
    //         src={globalicon}
    //         style={{ height: "20%" }}
    //       />

    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //     </div>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link dropdown-toggle"
    //             href="#"
    //             id="navbarDropdown"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Dropdown
    //           </a>
    //           <ul
    //             className="dropdown-menu dropdown-menu-end"
    //             aria-labelledby="navbarDropdown"
    //           >
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <hr className="dropdown-divider" />
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

// <nav className="navbar navbar-expand-sm navbar-light bg-success">
//   <div className="container-fluid ">
//     <a className="navbar-brand " href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse " id="navbarSupportedContent">
//       <ul className="navbar-nav ms-auto">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Course</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

export default Headers;

/* 
      <div>
        <nav className="navbar  navbar-expand-md " style={{ borderWidth: 1, borderColor: "black" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              GLOBAL REACH
            </a>
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="/">
                    Homepage
                  </a>
                </li>
                <li className="nav-item dropdown" role="presentation">
                  <div className="dropdown show" style={{ marginTop: "8px" }}>
                    <a
                      className="btn dropdown-toggle"
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
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a className="dropdown-item" href="/News"
                      >
                        Our  News
                      </a>
                      <a className="dropdown-item" href="#">
                        Audit
                      </a>
                      <a className="dropdown-item" href="#">
                        Zakat
                      </a>
                    </div>
                  </div>
                </li> */

/* <li className="nav-item" role="presentation">
                  <a className="nav-link" href="/News">
                    News
                  </a>
                </li> */

/* <li className="nav-item" role="presentation">
                  <a className="nav-link" href="/campaign">
                    About us
                  </a>
                </li> */

/* <li className="nav-item" role="presentation">
                  <a className="nav-link" href="/Campaign"> */

/* <span className="glyphicon glyphicon-user"></span> */

/* About
                  </a>
                </li>

                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="/Campaign">
                    <span className="glyphicon glyphicon-user"></span> Services
                  </a>
                </li>

                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="/Signin">
                    <span className="glyphicon glyphicon-log-in"></span> My Account
                  </a>
                </li>
              </ul> */

/* </div>
          </div>
        </nav> */

/* </div> */
