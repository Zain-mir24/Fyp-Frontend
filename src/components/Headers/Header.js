import React from "react";
import "./Header.css";

function Headers() {
  return (
    <div>
      <div class="header-blue">
        <nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
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
                  <a class="nav-link" href="/campaign">
                    Campaigns
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" href="/Signin">
                    <span class="glyphicon glyphicon-log-in"></span> Log in
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" href="/Signup">
                    <span class="glyphicon glyphicon-user"></span> Sign up
                  </a>
                </li>
                {/* <li class="nav-item dropdown">
                  <a
                    class="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                  >
                    Orphans
                  </a>
                  <div class="dropdown-menu" role="menu">
                    <a class="dropdown-item" role="presentation" href="#">
                      Logo design
                    </a>
                    <a class="dropdown-item" role="presentation" href="#">
                      Banner design
                    </a>
                    <a class="dropdown-item" role="presentation" href="#">
                      content writing
                    </a>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        {/* <div class="container hero">
          <div class="row">
            <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
              <h1>Business goal designs</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
              </p>{" "}
              <button class="btn btn-light btn-lg action-button" type="button">
                Learn More<i class="fa fa-long-arrow-right ml-2"></i>
              </button>
            </div>
            <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
              <div class="iphone-mockup">
                {" "}
                <img
                  class="device"
                  src="https://i.imgur.com/bkCeTu7.png"
                />{" "}
                <div class="screen"> </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Headers;
