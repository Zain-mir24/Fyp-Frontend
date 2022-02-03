import { React, useState, useEffect } from "react";
import Header from "../Headers/Header";
import { Layout, Image, Card, Progress, Button, Input } from "antd";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
const { Sider, Content } = Layout;
const dotenv = require("dotenv");
dotenv.config();
export default function CampaignDetails({ history }) {
  const [collection, setCollection] = useState();

  const queryParams = new URLSearchParams(window.location.search);

  const name = queryParams.get("name");
  const description = queryParams.get("description");
  const img = queryParams.get("img");
  const donation = queryParams.get("donation");
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 91507afdc437ccb850c42f1bdadc7883d4233012
  let cid = queryParams.get("campaignid");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getAmount = async () => {
    try {
      const result = await axios.get(
        `http://localhost:9000/donation/viewDonation/${cid}`
      );
      if (!result) {
        console.log("error fetching data");
      }
      setCollection(result.data.totalamount);
    } catch (e) {
      console.log(e);
    }
  };
<<<<<<< HEAD
=======
=======
  const collected = 50000000000;
>>>>>>> e061a86c35a1b1d76f3a15fbcc130831b826826d
>>>>>>> 91507afdc437ccb850c42f1bdadc7883d4233012

  const [amount, setAmount] = useState(0);
  const sendPayment = (token) => {
    const body = {
      token,
      name,
      amount,
      campaignId: cid,
      userId: null,
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

  useEffect(() => {
    getAmount();
    // percentageFormula()
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <Layout>
          <Layout style={{ backgroundColor: "white" }}>
            <Content>
              <h1>{name}</h1>
              <Image
                src={"https://damp-stream-39096.herokuapp.com/uploads/" + img}
                style={{ width: "100%", height: "500px" }}
              />
              <br />
              <br />
              <h3>Description</h3>
              <p>{description}</p>
              <br />
              <br />
            </Content>
            <Sider style={{ backgroundColor: "white" }}>
              {" "}
              <Card
                title={"Donation Amount: " + donation + " PKR"}
                style={{ width: 300 }}
              >
                <p>Amount Collected: {collection}</p>
                Percentage:{" "}
                <Progress
                  style={{ marginLeft: "20px" }}
                  type="circle"
                  percent={(collection / donation) * 100}
                />
              </Card>
              <Input
                placeholder="enter donation amount (pkr)"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
              <StripeCheckout
                stripeKey="pk_test_51KM9Y3ExITDpmfWazni9PRIx4s0n0fgT5sKt28GG6254mRAvw5Y2f8Ccg2r7lTzMVx5tugDG0io5mcr8OLGbC38K00M6JTFdIE"
                token={sendPayment}
                name="Donate to campaign"
                amount={amount * 100}
              >
                <Button>You are donating{amount}</Button>
              </StripeCheckout>
            </Sider>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
