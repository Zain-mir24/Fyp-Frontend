import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./components/SignUser/Signin";
import Signup from "./components/SignUser/Signup";
import AdminLogin from "./components/AdminLogin";
import home from "./components/homepage/home";
import Adminn from "./components/AdminPanel/Admin";
import Campaign from "./components/AdminPanel/adminCampaign";
import Userpanel from "./components/UserPanel/Userpanel";
import Changepassword from "./components/UserPanel/Changepassword";
import Forgotpassword from "./components/UserPanel/Forgotpassword";
import Resetpassword from "./components/UserPanel/ResetPassword";
// import NAVbar from "./components/design/Navbar";
// getting data from the backend api
function App() {
  const [getApi, setApi] = useState("");


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
            <Route path="/userPanel" component={Userpanel}></Route>
            <Route path="/changePassword"component={Changepassword}></Route>
            <Route path="/forgotPassword"component={Forgotpassword}></Route>
            <Route path="/resetPassword/:_id/:token" component={Resetpassword}></Route>
            <Route path="/" component={home}></Route>
           
          </Switch>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
