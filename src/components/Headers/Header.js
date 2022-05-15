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

function Headers(props) {
  console.log(props.active);
  let activeClass = props.active;
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark transparent-head fixed-top"
      style={{
        margin: "0 0 150px",
      }}
    >
      <a className="navbar-brand" href="">
        <img
          classNameName="navbar-brand"
          style={{ height: "60px" }}
          src={globalicon}
          // style={{ position: "absolute", top: "0" }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className={activeClass === "home" ? "nav-item active" : ""}>
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className={activeClass === "news" ? "nav-item active" : ""}>
            <a className="nav-link" href="/news">
              News
            </a>
          </li>
          <li className={activeClass === "campaign" ? "nav-item active" : ""}>
            <a className="nav-link" href="/Campaign">
              Campaign
            </a>
          </li>

          <li className={activeClass === "social" ? "nav-item active" : ""}>
            <a className="nav-link" href="/Video">
              Social Media
            </a>
          </li>
          <li className={activeClass === "Signin" ? "nav-item active" : ""}>
            <a className="nav-link" href="/Signin">
              Signin
            </a>
          </li>
        </ul>
      </div>
      <div style={{ paddingLeft: "150px" }}></div>
    </nav>
    // <nav
    //   classNameName="navbar navbar-expand-lg"
    //   style={{ height: "80px", backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    // >
    //   <div classNameName="container-fluid">
    //     <div>
    //       <img
    //         classNameName="navbar-brand"
    //         src={globalicon}
    //         style={{ height: "20%" }}
    //       />

    //       <button
    //         classNameName="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span classNameName="navbar-toggler-icon"></span>
    //       </button>
    //     </div>
    //     <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul classNameName="navbar-nav me-auto">
    //         <li classNameName="nav-item">
    //           <a classNameName="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li classNameName="nav-item">
    //           <a classNameName="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li classNameName="nav-item dropdown">
    //           <a
    //             classNameName="nav-link dropdown-toggle"
    //             href="#"
    //             id="navbarDropdown"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Dropdown
    //           </a>
    //           <ul
    //             classNameName="dropdown-menu dropdown-menu-end"
    //             aria-labelledby="navbarDropdown"
    //           >
    //             <li>
    //               <a classNameName="dropdown-item" href="#">
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a classNameName="dropdown-item" href="#">
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <hr classNameName="dropdown-divider" />
    //             </li>
    //             <li>
    //               <a classNameName="dropdown-item" href="#">
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

// <nav classNameName="navbar navbar-expand-sm navbar-light bg-success">
//   <div classNameName="container-fluid ">
//     <a classNameName="navbar-brand " href="#">Navbar</a>
//     <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span classNameName="navbar-toggler-icon"></span>
//     </button>
//     <div classNameName="collapse navbar-collapse " id="navbarSupportedContent">
//       <ul classNameName="navbar-nav ms-auto">
//         <li classNameName="nav-item">
//           <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li classNameName="nav-item">
//           <a classNameName="nav-link" href="#">Course</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

export default Headers;

/* 
      <div>
        <nav classNameName="navbar  navbar-expand-md " style={{ borderWidth: 1, borderColor: "black" }}>
          <div classNameName="container-fluid">
            <a classNameName="navbar-brand" href="/">
              GLOBAL REACH
            </a>
            <button
              data-toggle="collapse"
              classNameName="navbar-toggler"
              data-target="#navcol-1"
            >
              <span classNameName="sr-only">Toggle navigation</span>
              <span classNameName="navbar-toggler-icon"></span>
            </button>
            <div classNameName="collapse navbar-collapse" id="navcol-1">
              <ul classNameName="nav navbar-nav navbar-right">
                <li classNameName="nav-item" role="presentation">
                  <a classNameName="nav-link" href="/">
                    Homepage
                  </a>
                </li>
                <li classNameName="nav-item dropdown" role="presentation">
                  <div classNameName="dropdown show" style={{ marginTop: "8px" }}>
                    <a
                      classNameName="btn dropdown-toggle"
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
                      classNameName="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a classNameName="dropdown-item" href="/News"
                      >
                        Our  News
                      </a>
                      <a classNameName="dropdown-item" href="#">
                        Audit
                      </a>
                      <a classNameName="dropdown-item" href="#">
                        Zakat
                      </a>
                    </div>
                  </div>
                </li> */

/* <li classNameName="nav-item" role="presentation">
                  <a classNameName="nav-link" href="/News">
                    News
                  </a>
                </li> */

/* <li classNameName="nav-item" role="presentation">
                  <a classNameName="nav-link" href="/campaign">
                    About us
                  </a>
                </li> */

/* <li classNameName="nav-item" role="presentation">
                  <a classNameName="nav-link" href="/Campaign"> */

/* <span classNameName="glyphicon glyphicon-user"></span> */

/* About
                  </a>
                </li>

                <li classNameName="nav-item" role="presentation">
                  <a classNameName="nav-link" href="/Campaign">
                    <span classNameName="glyphicon glyphicon-user"></span> Services
                  </a>
                </li>

                <li classNameName="nav-item" role="presentation">
                  <a classNameName="nav-link" href="/Signin">
                    <span classNameName="glyphicon glyphicon-log-in"></span> My Account
                  </a>
                </li>
              </ul> */

/* </div>
          </div>
        </nav> */

/* </div> */
