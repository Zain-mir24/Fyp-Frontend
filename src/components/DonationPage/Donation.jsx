import React, { useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "antd";
const dotenv = require("dotenv");
dotenv.config();
function Donation() {
  const [campaign, setCampaign] = useState({
    price: 10,
    name: "Campaign for masjid",
  });
  const sendPayment = () => {};
  return (
    <div>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPEKEY}
        token=""
        name="Donate to campaign"
        amount={campaign.price * 100}
      >
        <Button>Donate us only {campaign.price}</Button>
      </StripeCheckout>
      <address></address>
    </div>
  );
}

export default Donation;
