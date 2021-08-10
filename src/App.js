import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import AdminLogin from "./components/AdminLogin";
import home from "./components/homepage/home";
<<<<<<< HEAD
import admindash from "./components/admindashboard/Admindash";
=======
import Admin from "./layouts/Admin";
>>>>>>> 4b96bd1c9964bb55c440e3050d09c440b4f9bf8a
// getting data from the backend api
function App() {
  const [getApi, setApi] = useState("");

  useEffect(() => {
<<<<<<< HEAD
    
    fetch("http://localhost:9000/admin")
=======
    fetch("http://localhost:9000/home")
>>>>>>> 4b96bd1c9964bb55c440e3050d09c440b4f9bf8a
      .then((res) => res.text())
      .then((res) => setApi(res));
  });
  return (
    <div className="App">
      <header className="App-header">
        <title>Global Reach</title>
      </header>
      <body>
        {getApi}
        <BrowserRouter>
          <Switch>
            <Route path="/Signin" component={Signin}></Route>
            <Route path="/Signup" component={Signup}></Route>
            <Route path="/Admin" component={AdminLogin}></Route>
<<<<<<< HEAD
            <Route path="/AdminDash" component={admindash}></Route>
=======
            <Route path="/Administrator" component={Admin}></Route>
>>>>>>> 4b96bd1c9964bb55c440e3050d09c440b4f9bf8a
            <Route path="/" component={home}></Route>
          </Switch>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
