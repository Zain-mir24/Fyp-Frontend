import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import Signin from "./components/Signin";

function App() {
  const [getApi, setApi] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/testApi")
      .then((res) => res.text())
      .then((res) => setApi(res));
  });
  return (
    <div className="App">
      <header className="App-header">
        <title>Global Reach</title>
      </header>
      <body>
      
      
        <div>
         <Signin />
        </div>
      </body>
    </div>
  );
}

export default App;
