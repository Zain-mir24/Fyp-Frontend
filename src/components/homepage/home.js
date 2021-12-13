import React, { useState, useEffect } from "react";
import Header from "../Headers/Header";
import LatestNews from "../LatestNews/LatestNews";
import Card from "./Card";
import Newsletter from "./Newsletter";
import SocialIcons from "./SocialIcons";
import { BackTop } from "antd";
// import Container from '@material-ui/core/Container';

export default function SignIn() {
  return (
    <div>
      <Header />
      <SocialIcons />
      <LatestNews />
      <Card />
      <Newsletter />
      <BackTop />
    </div>
  );
}
