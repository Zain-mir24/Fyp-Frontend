import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../../store/reducers/User";
import { Redirect, withRouter } from "react-router";

import { Layout, Image, Card, Progress, Button, Input } from "antd";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
const { Footer, Sider, Content } = Layout;
const dotenv = require("dotenv");
dotenv.config();
function CampaignDetail(props) {
  const user = useSelector(selectUser);


  const [collection, setCollection] = useState();
  const [amount, setAmount] = useState(0);

  const name = props.name;
  const description = props.description;
  const img = props.fileName;
  const donation = props.donation;
  let cid = props.id;
  console.log(props);
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
  const sendPayment = (token) => {
    const body = {
      token,
      name,
      amount,
      campaignId: cid,
      userId: user.userId
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
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <Layout style={{ backgroundColor: "white" }}>
              <Content>
                <h1>{name}</h1>
                <img
                  src={"http://localhost:9000/uploads/" + props.img}
                />

                {/* <Image
                  src={"https://damp-stream-39096.herokuapp.com/uploads/" + img}
                  style={{ width: "100%", height: "500px" }}
                /> */}

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
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.persistedReducer.user.user,
});

export default withRouter(connect(mapStateToProps)(CampaignDetail));
