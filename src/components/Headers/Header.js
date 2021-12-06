import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md  mainNavbar">
        <a href="/">
          <img class="glob" src="./Images/Global.png" />
        </a>
        <a class="navbar-brand heading" style={{ color: "black" }} href="#">
          Global Reach
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link tags" href="#">
                Our Team
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link tags" href="#">
                Latest News
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link tags" href="#">
                Contact us
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle tags"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Campaigns
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item tags" href="#">
                  Ramzan drive
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Sadqah
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form class="form-inline">
          <a href="/Signin">
            <button class="btn btn-outline-success signInButton" type="button">
              Signin
            </button>
          </a>
          <a href="/Signup">
            <button class="btn btn-outline-success signInButton " type="button">
              Signup
            </button>
          </a>
        </form>
      </nav>
    </div>
  );
}

export default Header;
