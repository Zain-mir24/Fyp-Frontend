import React, { useState, useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

// import { checkDonation } from "../../../store/reducers/User";
import { DONATION } from "../../../store/Actions/userAction";

import { Redirect, withRouter } from "react-router";
import { Layout, Image, Card, Progress, Button, Input, InputNumber } from "antd";
// import 'animate.css/animate.min.css';
// import { Notify } from "../../homepage/home";
import axios from "axios";
// import { Notify } from "../homepage/home";
import StripeCheckout from "react-stripe-checkout";
import { Store } from 'react-notifications-component';
import Home from "../../homepage/home"
import { io } from "socket.io-client";
import url from "../../../config/axios"
const { Footer, Sider, Content } = Layout;
const dotenv = require("dotenv");
dotenv.config();

function CampaignDetail(props) {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:4000");
    socket.current.on("getDonation", (data) => {
      Store.addNotification({
        title: `Donation is made by ${data.userName}`,
        message: `Donation is recieved for${data.campaignname}`,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    })

  }, [])
  const [value, setValue] = useState()
  const [Audit, setAudit] = useState()
  const [collection, setCollection] = useState();
  const [amount, setAmount] = useState(0);
  var userId = props.users.userId
  var userName = props.users.username
  console.log(userName)
  const campaignname = props.name;
  const description = props.description;
  const img = props.fileName;
  const donation = props.donation;
  let cid = props.id;
  console.log(props);
  const getAmount = async () => {
    try {
      const result = await url.get(
        `/donation/viewDonation/${cid}`
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
      campaignname: campaignname,
      totalamount: amount,
      campaignId: cid,
      userId: userId
    };

    return url
      .post("/stripe/pay", body)
      .then(async (res) => {
        console.log(res, "Response from sending data");
        socket.current.emit("sendDonation", {
          userName,
          campaignname
        })
        console.log("Successfull")


        // await axios.post("http://localhost:9000/User/sendnotification", {
        //   message: `Donation is made by ${userName} for ${campaignname}`
        // })

      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  const getCID = async () => {
    try {
      const res = await url.get(`/User/viewAudit/${cid}`)
      // console.log(res.data.fileName)
      console.log(res.data, "files are here")
      if (!res) {
        console.log("no audit yet")
      } else {
        setAudit(res.data.fileName)

      }
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getAmount();
    getCID()
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* <Layout style={{ backgroundColor: "white" }}> */}
            <Content>
              <h1>{campaignname}</h1>
              <img
                style={{ height: "400px" }}
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
          </div>
          {/* <Sider style={{ backgroundColor: "white" }}> */}
          {" "}
          <div className="col-lg-4">
            {donation <= collection ?
              <Card
                title={"Donation Amount: " + donation + " PKR"}
                style={{ width: 300 }}
              >
                <p>Amount fully collected for this campaign</p>
                Percentage:{" "}
                <Progress
                  style={{ marginLeft: "20px" }}
                  type="circle"
                  percent={(collection / donation) * 100}
                />
              </Card> : <Card
                title={"Donation Amount: " + donation + " PKR"}
                style={{ width: 300 }}
              >
                <p>Amount Collected: {collection}</p>
                Percentage:{" "}
                <Progress
                  style={{ marginLeft: "20px" }}
                  type="circle"
                  percent={((collection / donation) * 100).toFixed(2)}
                />
              </Card>}



            {donation < collection ? null : (
              <InputNumber
                style={{ border: "1px solid black", width: "40%" }}
                defaultValue={1000}
                min={1000}
                formatter={value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}

                placeholder="enter donation amount (pkr)"
                onChange={(e) => {
                  setAmount(e);
                }}
              />
            )}
            {amount < 1000 || amount > 999999 ? null : (
              <StripeCheckout
                stripeKey="pk_test_51KM9Y3ExITDpmfWazni9PRIx4s0n0fgT5sKt28GG6254mRAvw5Y2f8Ccg2r7lTzMVx5tugDG0io5mcr8OLGbC38K00M6JTFdIE"
                token={sendPayment}
                name="Donate to campaign"
                amount={amount * 100}
              >
                <br />
                <br />
                <Button
                  style={{
                    width: "100%",
                    backgroundColor: "#1B9834",
                    color: "white",
                  }}
                >
                  You are donating {amount}
                </Button>
              </StripeCheckout>
            )}
            {/* </Sider> */}
            {/* </Layout> */}
          </div>
        </div>
        <div>

          {Audit ?
            <div style={{ height: "200px" }}>
              <h1>
                Audit
              </h1>
              <a
                href={
                  "http://localhost:9000/uploads/" + Audit
                }><Button>
                  Download {Audit} Report
                </Button></a> </div> : <div>
              <h1>
                No Audit
              </h1>
            </div>}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.persistedReducer.user.user,
});

export default withRouter(connect(mapStateToProps)(CampaignDetail));
