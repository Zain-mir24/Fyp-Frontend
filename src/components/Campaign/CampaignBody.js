import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { withThemeCreator } from "@material-ui/styles";
import Card from "./CampaignCard";
import Header from "../design/Navbar";

function CampaignBody() {
  return (
    <div>
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

const styles = {};
export default CampaignBody;
