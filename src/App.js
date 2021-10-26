import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./components/SignUser/Signin";
import Signup from "./components/SignUser/Signup";
import AdminLogin from "./components/AdminLogin";
import home from "./components/homepage/home";
import Adminn from "./components/AdminPanel/Admin";
import Campaign from "./components/AdminPanel/adminCampaign";
// import NAVbar from "./components/design/Navbar";
// getting data from the backend api
function App() {
  const [getApi, setApi] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:9000/home")
  //     .then((res) => res.text())
  //     .then((res) => setApi(res));
  // });
  return (
    <div className="App">
      <header className="App-header">
        <title>Global Reach</title>
      </header>
      <body>
        {/* <NAVbar /> */}
        <BrowserRouter>
          <Switch>
            <Route path="/Signin" component={Signin}></Route>
            <Route path="/Signup" component={Signup}></Route>
            <Route path="/Admin" component={AdminLogin}></Route>
            <Route path="/Administrator" component={Adminn}></Route>
            <Route path="/Campaign" component={Campaign}></Route>
            <Route path="/" component={home}></Route>
          </Switch>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
