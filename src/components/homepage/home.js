import React, { useState, useEffect } from "react";
import Header from "../Headers/Header";
import LatestNews from "../LatestNews/LatestNews";
import Card from "./Card";
import Newsletter from "./Newsletter";
import SocialIcons from "./SocialIcons";
import Background from "./Background";
import Footer from "../Footer/Footer";
import Whychooseus from "./whychooseus";
import First from "./first";
import Second from "./Second";
import Wedo from "./Wedo";
import { BackTop } from "antd";
import { DONATION } from "../../store/Actions/userAction";
import { connect, useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
// import { checkDonation } from "../../store/reducers/User";
import axios from "axios";
import { val } from "../UserPanel/donorpanel/CampaignDetail";

function SignIn() {
  // const [notif, setNotification] = useState("")

  return (
    <div>
      <Header active="home" />
      <SocialIcons />
      <LatestNews />
      <First />
      {/* <Wedo /> */}
      <Second />

      <Background />

      <Newsletter />
      <BackTop />
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.persistedReducer.user.myuser,
});

export default withRouter(connect(mapStateToProps)(SignIn));
