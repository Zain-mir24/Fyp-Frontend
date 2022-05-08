import { React, useState, useEffect } from "react";
import Header from "../Headers/Header";
import { Layout, Image, Card, Progress, Button, Input } from "antd";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
const { Sider, Content } = Layout;
const dotenv = require("dotenv");
dotenv.config();
export default function CampaignDetails({ history }) {
  const [collection, setCollection] = useState(0);
  const [data, setData] = useState([]);

  const queryParams = new URLSearchParams(window.location.search);
  const [file, setFile] = useState()
  const name = queryParams.get("name");
  const description = queryParams.get("description");
  const img = queryParams.get("img");
  const donation = queryParams.get("donation");
  let cid = queryParams.get("campaignid");
  console.log(cid)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getAmount = async () => {
    try {
      const result = await axios.get(
        `http://localhost:9000/donation/viewDonation/${cid}`
      );
      if (!result) {
        console.log("error fetching data");
      }

      await setCollection(result.data.totalamount);
      await setData(result.data.registeredUser);
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  const viewTeams = async () => {
    try {
      const res = await axios.get("http://localhost:9000/Admin/viewAudits")
      console.log(res.data.view, "viewing Teams")
      res.data.view.filter((i) => {
        return i.Cid._id === cid ? setFile(i.fileName) : null
      })

    } catch (e) {
      console.log(e)
    }
  }

  const [totalamount, setAmount] = useState(0);
  const sendPayment = (token) => {
    const body = {
      token,
      name,
      totalamount,
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
    viewTeams()
    // percentageFormula()
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p>
              <a style={{ color: "#1B9834" }} href="/">
                Home
              </a>{" "}
              /{" "}
              <a style={{ color: "#1B9834" }} href="/campaign">
                Campaigns
              </a>{" "}
              / {name}
            </p>
          </div>
          {donation <= collection ?
            <div className="col-lg-6" style={{ textAlign: "right" }}>
              <button
                style={{
                  background: "transparent",
                  border: "2px solid green",
                  padding: "5px 10px",
                }}
              >
                Amount Fully collected for this campaign
              </button>
            </div>
            : <div className="col-lg-6" style={{ textAlign: "right" }}>
              <button
                style={{
                  background: "transparent",
                  border: "2px solid green",
                  padding: "5px 10px",
                }}
              >
                Amount To Be Collected: {donation - collection} PKR
              </button>
            </div>}

        </div>

        <section style={{ margin: "40px 0" }}>
          <div className="row">
            <div className="col-lg-6">
              <Image
                src={"http://localhost:9000/uploads/" + img}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-6">
              <h2>{name}</h2>
              <p>{description}</p>
              {donation < collection ? null : <Input style={{ border: "1px solid black", width: "40%" }}
                placeholder="enter donation amount (pkr)"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />}

              {
                totalamount < 1000 ?
                  null : <StripeCheckout
                    stripeKey="pk_test_51KM9Y3ExITDpmfWazni9PRIx4s0n0fgT5sKt28GG6254mRAvw5Y2f8Ccg2r7lTzMVx5tugDG0io5mcr8OLGbC38K00M6JTFdIE"
                    token={sendPayment}
                    name="Donate to campaign"
                    amount={totalamount * 100}
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
                      You are donating {totalamount}
                    </Button>
                  </StripeCheckout>
              }

              {
                file ?
                  <div>
                    <h2>
                      Audit for this Campaign
                    </h2>
                    <a
                      href={
                        "http://localhost:9000/uploads/" + file
                      }
                      download>
                      <Button
                        // onClick={()=>{
                        //   href={"http://localhost:9000/uploads/" + file}
                        // }}
                        style={{
                          width: "100%",
                          backgroundColor: "#1B9834",
                          color: "white",
                        }}
                      >
                        Download pdf {file}
                      </Button>
                    </a>
                  </div>
                  : <h2>
                    No audit yet
                  </h2>
              }



            </div>
          </div>
        </section>

        <section style={{ margin: "50px 0" }}>
          <div style={{ textAlign: "center" }}>
            <h3>Percentage</h3>
            <Progress
              strokeColor={"#1B9834"}
              percent={Math.floor((collection / donation) * 100)}
            />
          </div>
        </section>
        {/* <Layout>
          <Layout style={{ backgroundColor: "white" }}>
            <Content>
              <div
                style={{ width: "100%", height: "500px", textAlign: "center" }}
              >
                <Image
                  src={"http://localhost:9000/uploads/" + img}
                  style={{ width: "100%", height: "500px" }}
                />
              </div>

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
              <br />
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
                <Button type="primary" style={{ width: "100%" }}>
                  You are donating {amount}
                </Button>
              </StripeCheckout>
            </Sider>
          </Layout>
        </Layout> */}
      </div>
    </div>
  );
}
