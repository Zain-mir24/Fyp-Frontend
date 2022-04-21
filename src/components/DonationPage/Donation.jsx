import React, { useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Button, Input } from "antd";

const dotenv = require("dotenv");
dotenv.config();
function Donation() {
  const [campaign, setCampaign] = useState({

    name: "Campaign for masjid",
  });
  const [amount, setAmount] = useState(0);
  const sendPayment = (token) => {
    const body = {
      token,
      campaign,
      amount
    };
 
    return axios
      .post("http://localhost:9000/stripe/pay", body)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  return (
    <div>
      <Input
        placeholder="enter donation amount"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <StripeCheckout
        stripeKey="pk_test_51KM9Y3ExITDpmfWazni9PRIx4s0n0fgT5sKt28GG6254mRAvw5Y2f8Ccg2r7lTzMVx5tugDG0io5mcr8OLGbC38K00M6JTFdIE"
        token={sendPayment}
        name="Donate to campaign"
        amount={campaign.price * 100}
      >
        <Button>You are donating{amount}</Button>
      </StripeCheckout>
      <address></address>
    </div>
  );
}

export default Donation;
