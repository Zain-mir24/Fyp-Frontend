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

// import Container from '@material-ui/core/Container';

export default function SignIn() {
  return (
    <div>
      <Header />
      <SocialIcons />
      <LatestNews />
      <First />
      <Wedo />
      <Second />
      <Background />
      <Newsletter />
      <BackTop />
      <Footer />
    </div>
  );
}
