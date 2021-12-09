import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./components/SignUser/Signin";
import Signup from "./components/SignUser/Signup";
import home from "./components/homepage/home";
import Adminn from "./components/AdminPanel/Admin";
import Campaign from "./components/AdminPanel/adminCampaign";
import Userpanel from "./components/UserPanel/Userpanel";
import Changepassword from "./components/UserPanel/Changepassword";
import Forgotpassword from "./components/UserPanel/Forgotpassword";
import Resetpassword from "./components/UserPanel/ResetPassword";
import Adminlogin from "./components/Signadmin/Adminlogin";
import Adminsignup from "./components/Signadmin/Adminsignup";
import AddUser from "./components/UserPanel/AddUser";
import Chatbot from "react-chatbot-kit";
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
            <Route path="/Administrator" component={Adminn}></Route>
            <Route path="/Adminlogin" component={Adminlogin}></Route>
            <Route path="/Adminsignup" component={Adminsignup}></Route>
            <Route path="/Campaign" component={Campaign}></Route>
            <Route path="/userPanel" component={Userpanel}></Route>
            <Route path="/changePassword"component={Changepassword}></Route>
            <Route path="/forgotPassword"component={Forgotpassword}></Route>
            <Route path="/resetPassword/:_id/:token" component={Resetpassword}></Route>
            <Route path="/addUser/:_id/:token/:name/:email/:password/:userType" component={AddUser}></Route>
            <Route path="/" component={home}></Route>
          </Switch>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
