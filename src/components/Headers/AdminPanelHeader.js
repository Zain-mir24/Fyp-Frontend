import React, { useState, useEffect } from "react";

export default function PrimarySearchAppBar() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            GlobalReach
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav"></div>
        </div>
      </nav>
    </div>
  );
}
