import React from "react";
import "./Header.css";

function Headers() {
  return (
    <div>
      <div className="top-bar container-fluid header-blue">
        <a
          style={{
            color: "#fff",
            fontSize: "10px",
            lineHeight: "0.5",
            width: "20px",
          }}
        >
          AMBULANCE <br /> HELPLINE
        </a>
      </div>
      <div>
        <nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
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

                <li class="nav-item" role="presentation">
                  <a class="nav-link" href="/News">
                    News
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
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Headers;
